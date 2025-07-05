function showUcapan() {
      const nama = document.getElementById("namaTeman").value.trim();

      if (nama === "") {
        alert("Isi nama dulu....");
        return;
      }

      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }

      alert(`Thank you forever, ${nama}! 😁😁😁`);
    }