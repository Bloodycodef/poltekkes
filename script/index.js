fetch("api/api.json")
  .then((response) => response.json())
  .then((data) => {
    // Pasang logo
    document.querySelector(".logo").src = data.logo;

    // Ambil container untuk lab
    const labsGrid = document.querySelector(".labs-grid");
    labsGrid.innerHTML = ""; // Kosongkan dulu

    data.labs.forEach((lab) => {
      const fiturHTML = lab.fitur
        .map((f) => `<span class="feature-tag">${f}</span>`)
        .join("");
      const labCard = `
          <div class="lab-card">
            <div class="lab-image">
              <img src="${lab.gambar}" alt="${lab.nama}">
            </div>
            <div class="lab-content">
              <h3>${lab.nama}</h3>
              <p>${lab.deskripsi}</p>
              <div class="lab-features">${fiturHTML}</div>
              <a href="detail.html?id=kimia" class="btn">Lihat Detail</a>
            </div>
          </div>
        `;
      labsGrid.innerHTML += labCard;
    });
  })
  .catch((error) => {
    console.error("Gagal memuat data:", error);
  });
