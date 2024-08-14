// Show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function updateAuthenticationFields() {
    const dbType = document.getElementById('db-type').value;
    
    // Hide all authentication sections by default
    document.getElementById('auth-oauth').style.display = 'none';
    document.getElementById('auth-ldap').style.display = 'none';
    document.getElementById('auth-mfa').style.display = 'none';
    document.getElementById('auth-ssh').style.display = 'none';
    
    // Show relevant authentication sections based on dbType
    if (dbType === 'aws' || dbType === 'gcp' || dbType === 'azure') {
        document.getElementById('auth-oauth').style.display = 'block';
    } else if (dbType === 'private') {
        document.getElementById('auth-ldap').style.display = 'block';
        document.getElementById('auth-mfa').style.display = 'block';
        document.getElementById('auth-ssh').style.display = 'block';
    }
}

function submitDataIngestionForm() {
    // Handle data ingestion form submission
    alert('Data ingestion form submitted.');
}

function deploy() {
    // Handle deployment
    alert('Deployment initiated.');
}

function generateReport() {
    // Handle report generation
    alert('Report generation initiated.');
}

function toggleMasking(button) {
    // Handle masking toggle
    button.textContent = button.textContent === 'Mask' ? 'Unmask' : 'Mask';
}

function saveAuthenticationSettings() {
    // Handle saving authentication settings
    alert('Authentication settings saved.');
}


// Submit Data Ingestion Form
function submitForm() {
    const status = document.getElementById('status');
    status.textContent = 'Connected'; // Simulate connection status
}

// Toggle Masking
function toggleMasking(button) {
    if (button.textContent === 'Mask') {
        button.textContent = 'Unmask';
    } else {
        button.textContent = 'Mask';
    }
}

// Deploy Configuration
function deploy() {
    const terraformStatus = document.getElementById('terraform-status-text');
    terraformStatus.textContent = 'Deployed'; // Simulate deployment status
}

// Generate Report
function generateReport() {
    const reportStatus = document.getElementById('report-status-text');
    reportStatus.textContent = 'Generated'; // Simulate report generation
}

// Initial setup (show Dashboard by default)
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
});
function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible');
        section.classList.add('hidden');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('visible');
    }
}

function submitForm() {
    const status = document.getElementById('status');
    status.textContent = 'Connected'; // Simulate connection status
}

function toggleMasking(button) {
    if (button.textContent === 'Mask') {
        button.textContent = 'Unmask';
    } else {
        button.textContent = 'Mask';
    }
}

function deploy() {
    const terraformStatus = document.getElementById('terraform-status-text');
    terraformStatus.textContent = 'Deployed'; // Simulate deployment status
}

function generateReport() {
    const reportStatus = document.getElementById('report-status-text');
    reportStatus.textContent = 'Generated'; // Simulate report generation
}

// Initial setup (show Dashboard by default)
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
});

