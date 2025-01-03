// JavaScript for Navbar Interaction
document.addEventListener("DOMContentLoaded", () => {
    // Toggle User Dropdown
    const userMenuButton = document.getElementById("user-menu-button");
    const userDropdown = document.getElementById("user-dropdown");

    if (userMenuButton && userDropdown) {
        userMenuButton.addEventListener("click", () => {
            userDropdown.classList.toggle("hidden");
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (event) => {
            if (!userMenuButton.contains(event.target) && !userDropdown.contains(event.target)) {
                userDropdown.classList.add("hidden");
            }
        });
    }

    // Toggle Navbar for Mobile View
    const collapseToggleButton = document.querySelector("[data-collapse-toggle]");
    const navbarUser = document.getElementById("navbar-user");

    if (collapseToggleButton && navbarUser) {
        collapseToggleButton.addEventListener("click", () => {
            navbarUser.classList.toggle("hidden");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const faqList = document.getElementById("faq-list");
    const items = faqList.querySelectorAll("li");
  
    items.forEach((item) => {
      const header = item.querySelector("h2");
      const content = item.querySelector("div");
      const icon = item.querySelector("svg");
  
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("bg-gray-800");
  
        // Tutup semua item
        items.forEach((i) => {
          i.classList.remove("bg-gray-800");
          i.querySelector("div").classList.add("hidden");
          i.querySelector("svg").classList.remove("rotate-180");
        });
  
        // Jika tidak aktif, buka item yang diklik
        if (!isActive) {
          item.classList.add("bg-gray-800");
          content.classList.remove("hidden");
          icon.classList.add("rotate-180");
        }
      });
    });
  });
  
  
document.addEventListener('alpine:init', () => {
  Alpine.store('accordion', {
    tab: 0
  });
  
  Alpine.data('accordion', (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
    }
  }));
})