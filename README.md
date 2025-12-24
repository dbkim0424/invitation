# 🎄 Christmas Home Party 2025 🎅

A festive web application for organizing and managing a Christmas home party. Features include party details, RSVP functionality, guest list management, and activity schedule.

## Features

- **🎉 Festive Design**: Beautiful Christmas-themed UI with snowfall animation
- **📅 Party Details**: Display date, time, location, and dress code
- **⏰ Event Schedule**: Timeline of party activities and events
- **✉️ RSVP Form**: Allow guests to respond with attendance status
- **👥 Guest List**: Real-time guest list with attendance tracking
- **🎮 Activities**: Showcase of party games and activities
- **💾 Local Storage**: Persistent guest data using browser localStorage

## Live Demo

Simply open `index.html` in your web browser to view the application.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/dbkim0424/christmas-homeparty.git
   cd christmas-homeparty
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server: `python -m http.server 8000`
   - Navigate to `http://localhost:8000`

## File Structure

```
christmas-homeparty/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Usage

### For Party Hosts

1. **Customize Party Details**: Edit `index.html` to update:
   - Date and time
   - Location
   - Party schedule
   - Activities offered

2. **Share the Page**: Host the page and share the URL with your guests

### For Guests

1. **View Party Details**: See all information about the party
2. **RSVP**: Fill out the form with:
   - Your name
   - Email address
   - Attendance status
   - Number of guests
   - Dietary restrictions
3. **Check Guest List**: See who else is attending

## Customization

### Update Party Information

Edit the relevant sections in `index.html`:

- **Party Details**: Update the `.invitation-details` section
- **Schedule**: Modify the `.timeline` items
- **Activities**: Change the `.activities-grid` cards

### Styling

Customize colors in `styles.css` by modifying the CSS variables:

```css
:root {
    --christmas-red: #c41e3a;
    --christmas-green: #165b33;
    --christmas-gold: #ffd700;
    /* ... more variables */
}
```

## Technologies Used

- HTML5
- CSS3 (Animations, Grid, Flexbox)
- JavaScript (ES6+)
- localStorage API

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## License

This project is open source and available for personal and commercial use.

## Contributing

Feel free to fork this project and customize it for your own Christmas party!

---

🎄 **Merry Christmas and Happy Holidays!** 🎅
