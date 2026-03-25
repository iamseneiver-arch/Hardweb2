gsap.registerPlugin(ScrollTrigger);

/* HERO CINEMATIC INTRO */
gsap.from(".title", {
  opacity: 0,
  y: 120,
  duration: 2,
  ease: "power4.out"
});

gsap.from(".subtitle", {
  opacity: 0,
  y: 50,
  delay: 0.5,
  duration: 2
});

/* SCROLL DEPTH ANIMATION */
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    opacity: 0,
    y: 150,
    duration: 1.5,
    ease: "power3.out"
  });
});

/* STAR FIELD (CINEMATIC SKY) */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    ctx.fillStyle = "white";
    ctx.fillRect(s.x, s.y, s.size, s.size);

    s.y += 0.3;

    if (s.y > canvas.height) s.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();

/* MOUSE PARALLAX (DEPTH FEEL) */
document.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelector(".hero").style.transform =
    `translate(${moveX}px, ${moveY}px)`;
});
