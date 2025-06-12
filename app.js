// app.js - Minimalist Resume Generator

// Fonts for templates
const templateFonts = [
  "'Inter', sans-serif",
  "'Lora', serif",
  "'Playfair Display', serif"
];

// Minimalist template definitions
const templates = [
  {
    id: 'template1',
    name: 'Classic Minimal',
    font: templateFonts[0],
    render: (data) => `
      <div style="font-family: ${templateFonts[0]}; padding: 0; color: #222; background: linear-gradient(135deg, #fafbfc 80%, #ecebff 100%); border-radius: 24px; box-shadow: 0 8px 32px 0 rgba(108,99,255,0.08);">
        <div style="display: flex; align-items: center; gap: 32px; padding-bottom: 18px; border-bottom: 1.5px solid #ecebff;">
          ${data.profilePic ? `<img src='${data.profilePic}' style='width:90px;height:90px;border-radius:50%;object-fit:cover;border:3px solid ${selectedHeadlineColor};box-shadow:0 2px 12px #ecebff;' alt='Profile' />` : ''}
          <div>
            <h1 style="margin:0;font-size:2.5rem;font-weight:700;letter-spacing:0.04em;color:${selectedHeadlineColor};">${data.fullName || ''}</h1>
            <h2 style="margin:0;font-size:1.2rem;font-weight:400;color:${selectedHeadlineColor};letter-spacing:0.03em;">${data.jobTitle || ''}</h2>
            <div style="font-size:1.05rem;color:#888;margin-top:4px;">${data.contactInfo || ''}</div>
          </div>
        </div>
        <div style="margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:32px;">
          <div>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Summary</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.summary || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Skills</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.skills || ''}</p>
            ${data.awards ? `<h3 style=\"font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;\">Awards</h3><p style=\"margin:0 0 18px 0;line-height:1.7;\">${data.awards}</p>` : ''}
          </div>
          <div>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Work Experience</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.workExperience || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Education</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.education || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Character References</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.characterReferences || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Additional Information</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.additionalInfo || ''}</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'template2',
    name: 'Serif Elegance',
    font: templateFonts[1],
    render: (data) => `
      <div style="font-family: ${templateFonts[1]}; color: #23272a; background: linear-gradient(120deg, #ecebff 60%, #fafbfc 100%); border-radius: 24px; box-shadow: 0 8px 32px 0 rgba(108,99,255,0.10); padding: 32px;">
        <div style="text-align:center; padding-bottom: 18px; border-bottom: 1.5px solid #ecebff;">
          ${data.profilePic ? `<img src='${data.profilePic}' style='width:100px;height:100px;border-radius:50%;object-fit:cover;margin-bottom:14px;border:3px solid #6c63ff;box-shadow:0 2px 12px #ecebff;' alt='Profile' />` : ''}
          <h1 style="margin:0;font-size:2.3rem;font-weight:700;letter-spacing:0.04em;color:${selectedHeadlineColor};">${data.fullName || ''}</h1>
          <h2 style="margin:0;font-size:1.15rem;font-weight:400;color:${selectedHeadlineColor};letter-spacing:0.03em;">${data.jobTitle || ''}</h2>
          <div style="font-size:1.05rem;color:#888;margin-top:4px;">${data.contactInfo || ''}</div>
        </div>
        <div style="margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:32px;">
          <div>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Lora',serif;">Summary</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.summary || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Lora',serif;">Skills</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.skills || ''}</p>
            ${data.awards ? `<h3 style=\"font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Lora',serif;\">Awards</h3><p style=\"margin:0 0 18px 0;line-height:1.7;\">${data.awards}</p>` : ''}
          </div>
          <div>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Lora',serif;">Work Experience</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.workExperience || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Lora',serif;">Education</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.education || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Lora',serif;">Character References</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.characterReferences || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Lora',serif;">Additional Information</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.additionalInfo || ''}</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'template3',
    name: 'Modern Playfair',
    font: templateFonts[2],
    render: (data) => `
      <div style="font-family: ${templateFonts[2]}; color: #181a1b; background: linear-gradient(120deg, #fafbfc 80%, #ecebff 100%); border-radius: 24px; box-shadow: 0 8px 32px 0 rgba(108,99,255,0.10); padding: 32px;">
        <div style="display:flex;align-items:center;gap:28px; padding-bottom: 18px; border-bottom: 1.5px solid #ecebff;">
          ${data.profilePic ? `<img src='${data.profilePic}' style='width:85px;height:85px;border-radius:50%;object-fit:cover;border:3px solid ${selectedHeadlineColor};box-shadow:0 2px 12px #ecebff;' alt='Profile' />` : ''}
          <div>
            <h1 style="margin:0;font-size:2.4rem;font-weight:700;letter-spacing:0.04em;color:${selectedHeadlineColor};">${data.fullName || ''}</h1>
            <h2 style="margin:0;font-size:1.15rem;font-weight:400;color:${selectedHeadlineColor};letter-spacing:0.03em;">${data.jobTitle || ''}</h2>
            <div style="font-size:1.05rem;color:#888;margin-top:4px;">${data.contactInfo || ''}</div>
          </div>
        </div>
        <div style="margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:32px;">
          <div>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Summary</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.summary || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Skills</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.skills || ''}</p>
            ${data.awards ? `<h3 style=\"font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;\">Awards</h3><p style=\"margin:0 0 18px 0;line-height:1.7;\">${data.awards}</p>` : ''}
          </div>
          <div>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Work Experience</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.workExperience || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Education</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.education || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Character References</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.characterReferences || ''}</p>
            <h3 style="font-size:1.13rem;margin-bottom:8px;color:${selectedHeadlineColor};font-family:'Playfair Display',serif;">Additional Information</h3>
            <p style="margin:0 0 18px 0;line-height:1.7;">${data.additionalInfo || ''}</p>
          </div>
        </div>
      </div>
    `
  }
];

let selectedTemplate = templates[0];
let resumeData = {};
let selectedHeadlineColor = '#6c63ff';

// Move this after DOMContentLoaded to ensure the element exists
window.addEventListener('DOMContentLoaded', () => {
  const headlineColorSelect = document.getElementById('headline-color');
  if (headlineColorSelect) {
    selectedHeadlineColor = headlineColorSelect.value;
    headlineColorSelect.addEventListener('change', (e) => {
      selectedHeadlineColor = e.target.value;
      // Update preview in real time
      resumeData = getFormData();
      renderResumePreview();
    });
  }
});

// DOM Elements
const startBtn = document.getElementById('start-btn');
const mainContent = document.getElementById('main-content');
const form = document.getElementById('resume-form');
const templateCards = document.getElementById('template-cards');
const previewContainer = document.getElementById('resume-preview-container');
const downloadHtmlBtn = document.getElementById('download-html');
const downloadPdfBtn = document.getElementById('download-pdf');
const editBtn = document.getElementById('edit-btn');
const modeToggle = document.getElementById('toggle-mode');
const aiBtn = document.getElementById('generate-summary');
const profilePicInput = document.getElementById('profile-pic');
const profilePicPreview = document.getElementById('profile-pic-preview');
const headlineColorSelect = document.getElementById('headline-color');

// Show main content on start
startBtn.addEventListener('click', () => {
  document.querySelector('.intro').classList.add('hidden');
  mainContent.classList.remove('hidden');
});

// Light/Dark mode toggle
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  modeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Profile picture preview
profilePicInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      profilePicPreview.src = ev.target.result;
      profilePicPreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  } else {
    profilePicPreview.src = '';
    profilePicPreview.classList.add('hidden');
  }
});

// AI summary generation (simulated)
aiBtn.addEventListener('click', () => {
  const jobTitle = document.getElementById('job-title').value.trim();
  const name = document.getElementById('full-name').value.trim();
  const experience = document.getElementById('work-experience').value.trim();
  const skills = document.getElementById('skills').value.trim();
  const education = document.getElementById('education').value.trim();

  // Use the full first line of education (not just the first word)
  let school = '';
  if (education) {
    const lines = education.split(/\n|\r/).filter(Boolean);
    school = lines.length > 0 ? lines[0] : education;
  }

  let summary = '';
  if (jobTitle && experience && skills && school) {
    summary = `${name ? name + ' is ' : ''}an accomplished ${jobTitle} with experience in ${experience.split(/[.,\n]/)[0]}. Skilled in ${skills.split(/[.,\n]/)[0]}, and educated at ${school}. Passionate about delivering results and continuous growth.`;
  } else if (jobTitle && skills) {
    summary = `${name ? name + ' is ' : ''}a dedicated ${jobTitle} skilled in ${skills.split(/[.,\n]/)[0]}. Committed to excellence and professional development.`;
  } else if (jobTitle) {
    summary = `${name ? name + ' is ' : ''}a motivated ${jobTitle} eager to contribute and grow.`;
  } else {
    summary = `A passionate professional eager to make an impact.`;
  }
  document.getElementById('summary').value = summary;
});

// Render template cards
function renderTemplateCards() {
  templateCards.innerHTML = '';
  templates.forEach((tpl, idx) => {
    const card = document.createElement('div');
    card.className = 'template-card' + (idx === 0 ? ' selected' : '');
    card.innerHTML = `<div style="font-family:${tpl.font};font-size:1.1rem;line-height:1.3;">${tpl.name}</div>`;
    card.addEventListener('click', () => {
      document.querySelectorAll('.template-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedTemplate = tpl;
      renderResumePreview();
    });
    templateCards.appendChild(card);
  });
}
renderTemplateCards();

// Gather form data
function getFormData() {
  return {
    profilePic: profilePicPreview.src && !profilePicPreview.classList.contains('hidden') ? profilePicPreview.src : '',
    fullName: document.getElementById('full-name').value,
    jobTitle: document.getElementById('job-title').value,
    contactInfo: document.getElementById('contact-info').value,
    workExperience: document.getElementById('work-experience').value,
    education: document.getElementById('education').value,
    skills: document.getElementById('skills').value,
    awards: document.getElementById('awards').value,
    summary: document.getElementById('summary').value,
    additionalInfo: document.getElementById('additional-info').value,
    characterReferences: document.getElementById('character-references').value
  };
}

// Render resume preview
function renderResumePreview() {
  previewContainer.innerHTML = selectedTemplate.render(resumeData);
}

// Form submit: show preview
form.addEventListener('submit', (e) => {
  e.preventDefault();
  resumeData = getFormData();
  renderResumePreview();
  form.parentElement.classList.add('hidden');
  document.querySelector('.template-section').classList.add('hidden');
  document.querySelector('.preview-section').classList.remove('hidden');
  addImageDownloadButtons();
});

// Edit button: return to form
editBtn.addEventListener('click', () => {
  document.querySelector('.form-section').classList.remove('hidden');
  document.querySelector('.template-section').classList.remove('hidden');
  document.querySelector('.preview-section').classList.add('hidden');
});

// Download as HTML + CSS
function downloadHTML() {
  const htmlContent = `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Resume</title><link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lora:wght@400;700&family=Playfair+Display:wght@400;700&display=swap' rel='stylesheet'><style>body{background:#fafbfc;color:#222;font-family:${selectedTemplate.font};margin:0;padding:32px;}img{border-radius:50%;object-fit:cover;}</style></head><body>${selectedTemplate.render(resumeData)}</body></html>`;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'resume.html';
  a.click();
}
downloadHtmlBtn.addEventListener('click', downloadHTML);

// Download as PDF (using print)
function downloadPDF() {
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Resume PDF</title><link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lora:wght@400;700&family=Playfair+Display:wght@400;700&display=swap' rel='stylesheet'><style>body{background:#fff;color:#222;font-family:${selectedTemplate.font};margin:0;padding:32px;}img{border-radius:50%;object-fit:cover;}</style></head><body>${selectedTemplate.render(resumeData)}</body></html>`);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 500);
}
downloadPdfBtn.addEventListener('click', downloadPDF);

// Add Download as PNG and JPG buttons only after DOM is loaded and preview section is visible
function addImageDownloadButtons() {
  if (!document.getElementById('download-png')) {
    const downloadPngBtn = document.createElement('button');
    downloadPngBtn.id = 'download-png';
    downloadPngBtn.className = 'download-btn';
    downloadPngBtn.textContent = 'Download as PNG';
    const downloadJpgBtn = document.createElement('button');
    downloadJpgBtn.id = 'download-jpg';
    downloadJpgBtn.className = 'download-btn';
    downloadJpgBtn.textContent = 'Download as JPG';
    const downloadActions = document.querySelector('.download-actions');
    downloadActions.appendChild(downloadPngBtn);
    downloadActions.appendChild(downloadJpgBtn);

    function downloadImage(type) {
      const node = document.getElementById('resume-preview-container');
      // Set a fixed resume size (A4 at 96dpi: 794x1123px)
      const width = 794;
      const height = 1123;
      const originalStyle = node.getAttribute('style') || '';
      // Temporarily set the preview to A4 size for export
      node.style.width = width + 'px';
      node.style.height = height + 'px';
      node.style.maxWidth = width + 'px';
      node.style.maxHeight = height + 'px';
      node.style.overflow = 'hidden';
      window.html2canvas(node, {backgroundColor: null, width, height, scale: 2}).then(canvas => {
        // Restore original style
        node.setAttribute('style', originalStyle);
        const link = document.createElement('a');
        link.download = `resume.${type}`;
        link.href = canvas.toDataURL(`image/${type === 'jpg' ? 'jpeg' : 'png'}`);
        link.click();
      });
    }
    downloadPngBtn.addEventListener('click', () => downloadImage('png'));
    downloadJpgBtn.addEventListener('click', () => downloadImage('jpg'));
  }
}

// On load: hide preview section
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.preview-section').classList.add('hidden');
});
