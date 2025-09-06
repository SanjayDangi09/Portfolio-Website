
document.addEventListener("DOMContentLoaded", () => {
  const hireMeBtn = document.querySelector("[data-HireMe]");
  const contactSection = document.querySelector("[data-contactMe]");

  if (hireMeBtn && contactSection) {
    hireMeBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});




document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('project-modal');
  const titleEl = modal.querySelector('#modal-title');
  const bodyEl = modal.querySelector('#modal-body');
  const closeBtn = modal.querySelector('.modal-close');
  const readBtns = document.querySelectorAll('.read-more-btn');

  // open modal with content from hidden details block
  function openModal(detailsId) {
    const details = document.getElementById(detailsId);
    if (!details) return;

    // get title and body from details block
    const titleNode = details.querySelector('.details-title');
    const bodyNode = details.querySelector('.details-body');

    titleEl.textContent = titleNode ? titleNode.textContent : '';
    bodyEl.innerHTML = bodyNode ? bodyNode.innerHTML : '';

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // move focus to close button for accessibility
    closeBtn.focus();
  }

  // close modal and cleanup
  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    // optional: clear content
    titleEl.textContent = '';
    bodyEl.innerHTML = '';
  }

  // attach click handlers to all read-more buttons
  readBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const detailsId = btn.dataset.details;
      if (!detailsId) return;
      openModal(detailsId);
    });
  });

  // close when clicking the X
  closeBtn.addEventListener('click', closeModal);

  // close when clicking outside modal-content (on overlay)
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
});


