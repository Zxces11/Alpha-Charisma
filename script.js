const DATA = {
    tagline: "LOYALTY OVER EVERYTHING",
    history: "Alpha Charisma isn't just a group—it's a brotherhood born within the walls of a local computer shop in Marilao. What started as a shared passion for gaming evolved into a lifetime of solidarity. We are a pack that grew from the streets to the screens, moving as one, winning as one. Through every victory and every setback, we stand by the code: No one gets left behind. Solid since day one.",
    location: "MARILAO BULACAN // EST. 2015",
    members: [
        { name: "John Paul Alvaro", role: "The Left-hand of Charismatic", img: "img/paul.jpg" },
        { name: "Nick John Balcita", role: "The Leader of Charismatic", img: "img/nick.jpg" },
        { name: "Micheal Roca", role: "The Right-hand of Charismatic", img: "img/mic.jpg" },
        { name: "Ivan Puenlabrada", role: "The Papi of Charismatic", img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/606411668_1518919069374477_7420026887187660648_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGNupeJeFDV8QMpwLG8oGAaadEAzEiutftp0QDMSK61-0tPYQadC4qo7Si9D4WPIAJrzcAKoROlwtf6cXBAHrpv&_nc_ohc=43WHm6cyx-cQ7kNvwENrVOj&_nc_oc=AdmzEZUyYAVgKIlHLjHNaAbZV-RKLBfHxndv8B_QOf65OyAOYUNd6TuC32ibVvMPOJE&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&oh=03_Q7cD4QGdKUN8k6UrMJ67ewPIQMUKuOftE3GqViDfyuSeEq1Etg&oe=6992D7CE" },
        { name: "Jobert Escalderon", role: "The Masterbate of Charismatic", img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.15752-9/598641546_1288852429667270_4557142371736761800_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHUAdkX920TtdDdDwu3GJIsLNGBGff99sos0YEZ9_32ynpLVTxlUyzccvg4ijQRq_AQnJA9nrtK4w-C1PwJSAAN&_nc_ohc=KDV1GLOwiQgQ7kNvwFEaMfX&_nc_oc=AdmMdRwqwcS6MFpAEFHKkmpNQOQvehUW1EzGfXBJYPdxSwPob9GNzquQTljzVvW_LTk&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&oh=03_Q7cD4QF9P3xrQWAiwUeGZRFEY0Kl5cUOAtR4PlXwAJtcpaDWog&oe=6992B552" },
        { name: "John Delber Macaysa", role: "The Goodboy of Charismatic", img: "img/jd.jpg" },
        { name: "Mark Joben Landicho", role: "The Loyal of Charismatic", img: "img/jobs.jpg" },
        { name: "Jay-ar Abion", role: "The Defender of Charismatic", img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/590409382_825133077084856_2292051356827915309_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFUpT0IiF-PjEXYrm5JxkZZ3VnhQIt4bH_dWeFAi3hsf18lWnK4LQE5UeHgkNiytF64dXwVXKTutLH6WaqJK2TB&_nc_ohc=PS-HCkTrOikQ7kNvwHAcYPm&_nc_oc=Admea-IKQlqCc4nUk-Hn9nPOgZkPoUH8Twq7FbTnHsmN1YIH6jJVccEI7FF2QvC8uQI&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&oh=03_Q7cD4QFhEJG8arrhMBE4Ic5e1wN_DjEl3u-UpzrpCXHlZwDc_w&oe=6992AD53" },
        { name: "Joshua Roca", role: "The Loverboy of Charismatic", img: "img/josh.jpg" }
    ],
    gallery: [
        { cap: "Ride's at Montalban Rizal", date: "January 22, 2026", img: "img/rides_montalban.mp4" },
        { cap: "Long ride short on gas (nick) 😂", date: "January 22, 2026", img: "img/gas_checked.mp4" },
        { cap: "Montalban Selfie 2", date: "January 22, 2026", img: "img/montalban_selfie2.jpg" },
        { cap: "Montalban Selfie 1", date: "January 22, 2026", img: "img/montalban_selfie1.jpg" },
        { cap: "Foodtrip at Montalban Rizal", date: "January 22, 2026", img: "img/montalban.jpg" },
        { cap: "John Paul Brother Funeral", date: "Jan 2024", img: "img/lamay.jpg" },
        { cap: "Jobert's Wedding", date: "Feb 2024", img: "img/wedding.jpg" },
        { cap: "Night Eat Pares", date: "Mar 2024", img: "img/pares.jpg" },
        { cap: "Solid Bond", date: "Apr 2024", img: "img/trops.jpg" },
        { cap: "Joben Father Funeral", date: "May 2024", img: "img/lamay2.jpg" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    // Set basic text content
    document.getElementById('tagline').innerText = DATA.tagline;
    document.getElementById('history-text').innerText = DATA.history;
    document.getElementById('location-text').innerText = DATA.location;

    // Render first 3 members
    const tropsGrid = document.getElementById('founder-grid');
    DATA.members.slice(0, 3).forEach(m => {
        tropsGrid.innerHTML += renderCard(m, "col-6 col-md-4");
    });
    
    // Render all members in modal
    const modalTrops = document.getElementById('modal-trops-grid');
    DATA.members.forEach(m => {
        modalTrops.innerHTML += renderCard(m, "col-6 col-md-4 col-lg-3");
    });

    // Render first 6 gallery items
    const galGrid = document.getElementById('gallery-grid');
    DATA.gallery.slice(0, 6).forEach(g => {
        galGrid.innerHTML += renderGalCard(g, "col-6 col-md-4");
    });

    // Show "See All" button if more than 6 gallery items
    if (DATA.gallery.length > 6) {
        document.getElementById('gallery-see-more-container').classList.remove('d-none');
        const modalGal = document.getElementById('modal-gallery-grid');
        DATA.gallery.forEach(g => {
            modalGal.innerHTML += renderGalCard(g, "col-6 col-md-4 col-lg-3");
        });
    }

    // Logo hover timer for lightbox
    let logoTimer;
    const logoImg = document.getElementById('nav-logo');
    logoImg.addEventListener('mouseenter', () => {
        logoTimer = setTimeout(() => {
            openLightbox('img/logo.png', 'ALPHA CHARISMA', 'OFFICIAL EMBLEM');
        }, 5000);
    });
    logoImg.addEventListener('mouseleave', () => clearTimeout(logoTimer));

    // Stop video when lightbox is closed
    const lightboxModalEl = document.getElementById('lightboxModal');
    lightboxModalEl.addEventListener('hidden.bs.modal', () => {
        const vidCont = document.getElementById('lightbox-video-container');
        vidCont.innerHTML = ''; // Remove video element to stop sound
    });
});

function renderCard(member, colClass) {
    // Escape quotes in names and roles
    const name = member.name.replace(/'/g, "\\'");
    const role = member.role.replace(/'/g, "\\'");
    const img = member.img.replace(/'/g, "\\'");
    
    return `
        <div class="${colClass}">
            <div class="text-center" onclick="openLightbox('${img}', '${name}', '${role}')">
                <div class="img-frame mb-2">
                    <img src="${img}" alt="${name}" loading="lazy">
                </div>
                <h4 class="font-title mb-1 text-uppercase" style="font-size: 0.65rem">${member.name}</h4>
                <p class="small-text opacity-50 uppercase mb-3" style="font-size: 8px;">${member.role}</p>
            </div>
        </div>
    `;
}

function renderGalCard(galleryItem, colClass) {
    // Escape quotes in captions
    const cap = galleryItem.cap.replace(/'/g, "\\'");
    const date = galleryItem.date.replace(/'/g, "\\'");
    const img = galleryItem.img.replace(/'/g, "\\'");
    
    const isVid = galleryItem.img.toLowerCase().endsWith('.mp4');
    const media = isVid 
        ? `<video src="${img}" muted loop autoplay playsinline></video>` 
        : `<img src="${img}" alt="${cap}" loading="lazy">`;

    return `
        <div class="${colClass}">
            <div class="gallery-card-wrapper" onclick="openLightbox('${img}', '${cap}', '${date}')">
                <div class="img-frame mb-2">${media}</div>
                <p class="mb-0 text-uppercase fw-bold" style="font-size: 0.65rem; letter-spacing: -0.5px">${galleryItem.cap}</p>
                <p class="small-text opacity-40 uppercase mb-3" style="font-size: 8px;">${galleryItem.date}</p>
            </div>
        </div>
    `;
}

function openLightbox(file, title, sub) {
    const isVid = file.toLowerCase().endsWith('.mp4');
    const imgEl = document.getElementById('lightbox-img');
    const vidCont = document.getElementById('lightbox-video-container');

    if (isVid) {
        imgEl.style.display = 'none';
        vidCont.innerHTML = `<video id="active-video" src="${file}" controls autoplay class="img-fluid" style="max-height: 70vh; width: 100%;"></video>`;
    } else {
        vidCont.innerHTML = '';
        imgEl.src = file;
        imgEl.style.display = 'inline-block';
    }

    document.getElementById('lightbox-title').innerText = title;
    document.getElementById('lightbox-sub').innerText = sub;
    
    const lightboxModal = document.getElementById('lightboxModal');
    const modal = new bootstrap.Modal(lightboxModal);
    modal.show();
}