    const circle = document.getElementById('circle');
    const totalPoints = 5;
    const pointTexts = [
      "Conteúdo para o Ponto 1",
      "Conteúdo para o Ponto 2",
      "Conteúdo para o Ponto 3",
      "Conteúdo para o Ponto 4",
      "Conteúdo para o Ponto 5"
    ];

    let currentPoint = 0;

    // Função para calcular a posição dos pontos no círculo
    function positionPoints() {
      const radius = 730; // Raio do círculo
      const centerX = 700; // Centro do círculo
      const centerY = 700; // Centro do círculo
      const angleStep = 360 / totalPoints; // O ângulo entre os pontos

      const points = document.querySelectorAll('.circle-point');

      points.forEach((point, index) => {
        const angle = angleStep * index + 55;
        const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
        const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

        point.style.left = `${x}px`;
        point.style.top = `${y}px`;
      });
    }

    // Função para lidar com o scroll e calcular a rotação
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Calcular a qual momento do scroll estamos (dividido em 5 partes)
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      let targetPoint = Math.floor(scrollPercentage / (100 / totalPoints));

      // Impedir que o ponto volte para o primeiro quando atingir o final
      if (targetPoint >= totalPoints - 1) {
        targetPoint = totalPoints - 1; // Manter no último ponto
      }

      // Animar a rotação usando GSAP
      gsap.to(circle, {
        rotation: targetPoint * 72,  // Cada ponto representa 72 graus
        duration: 0.5,  // Duração da animação
        ease: "power2.out"  // Suaviza a animação
      });
    }

    // Escutar o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Inicializar a posição dos pontos
    positionPoints();