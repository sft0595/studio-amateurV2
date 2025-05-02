<template>
  <!-- WhatsApp sticky button -->
  <div class="whatsapp-button">
    <a
      href="https://wa.me/+8801956491391?text=Hello%20I%20have%20a%20question"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="pi pi-whatsapp"></i>
    </a>
  </div>
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  transition: all 0.3s ease;
}

.whatsapp-button a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #25D366; /* WhatsApp brand color */
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.whatsapp-button i {
  font-size: 2rem;
  color: white !important; /* Override any other color styles */
}

/* Hover effects */
.whatsapp-button:hover {
  transform: translateY(-3px);
}

.whatsapp-button:hover a {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  background-color: #128C7E; /* Darker WhatsApp color */
}

/* Pulse animation */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.whatsapp-button.pulse {
  animation: pulse 2s infinite;
}

/* For mobile responsiveness */
@media (max-width: 768px) {
  .whatsapp-button {
    bottom: 20px;
    right: 20px;
  }
  
  .whatsapp-button a {
    width: 50px;
    height: 50px;
  }
  
  .whatsapp-button i {
    font-size: 1.7rem;
  }
}
</style>

<script>
// Optional: Add this if you want the button to appear after scrolling
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      const whatsappBtn = document.querySelector('.whatsapp-button');
      // Show button after 2 seconds or when user scrolls
      setTimeout(() => {
        whatsappBtn.style.opacity = '1';
        whatsappBtn.style.transform = 'translateY(0)';
      }, 2000);
      
      // Or show on scroll:
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          whatsappBtn.style.opacity = '1';
          whatsappBtn.style.transform = 'translateY(0)';
        }
      });
    });
  }
}
</script>