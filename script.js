// Guest list data stored in localStorage
let guests = [];

// Load guests from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadGuests();
    updateGuestList();
    
    // Setup form submission
    const form = document.getElementById('rsvpForm');
    form.addEventListener('submit', handleRSVP);
});

// Load guests from localStorage
function loadGuests() {
    const savedGuests = localStorage.getItem('christmasPartyGuests');
    if (savedGuests) {
        guests = JSON.parse(savedGuests);
    }
}

// Save guests to localStorage
function saveGuests() {
    localStorage.setItem('christmasPartyGuests', JSON.stringify(guests));
}

// Handle RSVP form submission
function handleRSVP(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const guestData = {
        name: formData.get('guestName'),
        email: formData.get('guestEmail'),
        attendance: formData.get('attendance'),
        guestCount: parseInt(formData.get('guests')),
        dietaryRestrictions: formData.get('dietaryRestrictions'),
        timestamp: new Date().toISOString()
    };
    
    // Check if guest already exists (by email)
    const existingIndex = guests.findIndex(g => g.email === guestData.email);
    
    if (existingIndex !== -1) {
        // Update existing guest
        guests[existingIndex] = guestData;
        showSuccessMessage('Your RSVP has been updated! 🎉');
    } else {
        // Add new guest
        guests.push(guestData);
        showSuccessMessage('Thank you for your RSVP! 🎅');
    }
    
    // Save to localStorage
    saveGuests();
    
    // Update display
    updateGuestList();
    
    // Reset form
    event.target.reset();
    
    // Scroll to guest list
    document.querySelector('.guest-list-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}

// Show success message
function showSuccessMessage(message) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    
    // Insert before the form
    const form = document.getElementById('rsvpForm');
    form.parentNode.insertBefore(messageDiv, form);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.5s ease';
        setTimeout(() => messageDiv.remove(), 500);
    }, 5000);
}

// Update guest list display
function updateGuestList() {
    const guestListElement = document.getElementById('guestList');
    const guestCountElement = document.getElementById('guestCount');
    
    // Filter attending guests
    const attendingGuests = guests.filter(g => g.attendance === 'yes');
    const totalAttendees = attendingGuests.reduce((sum, g) => sum + g.guestCount, 0);
    
    // Update count
    guestCountElement.textContent = totalAttendees;
    
    // Clear list
    guestListElement.innerHTML = '';
    
    if (guests.length === 0) {
        guestListElement.innerHTML = '<li class="no-guests">No RSVPs yet. Be the first!</li>';
        return;
    }
    
    // Sort guests by timestamp (newest first)
    const sortedGuests = [...guests].sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
    );
    
    // Add each guest
    sortedGuests.forEach(guest => {
        const li = document.createElement('li');
        
        const guestInfo = document.createElement('div');
        guestInfo.className = 'guest-info';
        
        const statusMap = {
            'yes': { text: '✅ Attending', class: 'attending' },
            'maybe': { text: '🤔 Maybe', class: 'maybe' },
            'no': { text: '❌ Can\'t make it', class: 'not-attending' }
        };
        
        const status = statusMap[guest.attendance] || statusMap['maybe'];
        
        guestInfo.innerHTML = `
            <strong>${guest.name}</strong>
            ${guest.guestCount > 1 ? `<span>(+${guest.guestCount - 1} guest${guest.guestCount > 2 ? 's' : ''})</span>` : ''}
        `;
        
        const statusSpan = document.createElement('span');
        statusSpan.className = `guest-status ${status.class}`;
        statusSpan.textContent = status.text;
        
        li.appendChild(guestInfo);
        li.appendChild(statusSpan);
        guestListElement.appendChild(li);
    });
}

// Add some festive interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to activity cards
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Add hover effect to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--ice-blue)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});

// Countdown to Christmas (if before Dec 25)
function updateCountdown() {
    const christmas = new Date('2025-12-25T18:00:00');
    const now = new Date();
    const diff = christmas - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        // Could add countdown display if needed
        console.log(`Countdown to party: ${days}d ${hours}h ${minutes}m`);
    }
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
updateCountdown();
