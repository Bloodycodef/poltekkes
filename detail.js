const urlParams = new URLSearchParams(window.location.search);
const labId = urlParams.get("id");

fetch("detail.json")
  .then((res) => res.json())
  .then((data) => {
    const lab = data.find((l) => l.id === labId);

    if (!lab) {
      document.body.innerHTML = "<h2>Laboratorium tidak ditemukan.</h2>";
      return;
    }

    document.getElementById("lab-nama").textContent = lab.nama;
    document.getElementById("lab-deskripsi").textContent = lab.deskripsi;

    function renderItems(items, containerId) {
      const container = document.getElementById(containerId);
      items.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("item-card");
        div.innerHTML = `
          <img src="${item.gambar}" alt="${item.nama}">
          <p>${item.nama}</p>
        `;
        container.appendChild(div);
      });
    }

    renderItems(lab.alat, "alat-list");
    renderItems(lab.bahan, "bahan-list");
    renderItems(lab.reagen, "reagen-list");
  });
