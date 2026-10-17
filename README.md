# Harshitha Palaparthi – Professional Physiotherapist Portfolio

A modern, responsive, and elegant personal portfolio website designed specifically for **Harshitha Palaparthi**, a licensed physiotherapist with **5 years of practice experience**. Built with semantic HTML5, modern CSS3 (Flexbox & CSS Grid), and lightweight vanilla JavaScript.

---

## 🎬 Cinematic 4-Scene Animated Video Introduction (0 – 12 Seconds)
The website opens with a full-screen, video-style sequential animation designed with a clean white background, navy blue typography, and teal accents:

1. **Scene 1 (0s – 3s) • Personal Introduction:**
   - **Left:** Harshitha's authentic portrait photo (`images/harshitha.jpg`) in a clinical frame with verified clinician badge.
   - **Right:** Animated entrance of her name (*Harshitha Palaparthi*) and designation (*Physiotherapist & Rehabilitation Specialist*).
   - **Timing constraint:** The photo **fades out by 3 seconds** before moving to Scene 2.
2. **Scene 2 (3s – 6s) • Professional Experience:**
   - **No photo displayed** (as required).
   - Dynamic kinetic typography displaying **"5+ Years of Practice Experience"** with clinical competency pills.
3. **Scene 3 (6s – 9s) • Skills & Patient Care:**
   - Three animated healthcare pillars featuring subtle motion cards:
     - *Patient-Centred Care* (empathy and individual goals)
     - *Physiotherapy and Rehabilitation* (evidence-based treatment and manual therapy)
     - *Functional Mobility and Recovery* (range of motion and independence)
4. **Scene 4 (9s – 12s) • Closing Transition:**
   - Pulsing healthcare crest displaying the closing motto: *“Helping people move better and live healthier.”*
   - Smoothly dissolves and fades out at 12 seconds, revealing the main website.

### Controls & Navigation:
- **Skip Intro Button:** Immediate bypass to the website at any time.
- **Keyboard Shortcut:** Press <kbd>Escape</kbd> to skip instantly.
- **Real-Time Timeline:** Bottom progress bar and 4-step scene indicators.
- **Replay Experience:** A **"Replay Intro Experience"** button in the website footer allows visitors to restart the video at any time.

---

## 🎨 Design & Aesthetic System
- **Color Palette:**
  - **Background:** Crisp Clean White (`#ffffff`, `#f8fafc`) with subtle clinical grid and ambient teal/navy glows
  - **Primary Accents:** Clinical Deep Navy (`#0f2744`, `#0a192f`)
  - **Secondary Accents:** Healthcare Teal (`#0d9488`, `#14b8a6`, `#f0fdfa`)
- **Typography:** Google Fonts *Plus Jakarta Sans* (clean, modern, highly legible).
- **Responsive:** Fluid layout optimized for mobile screens, tablets, laptops, and 4K displays.
- **Micro-Interactions:** Real CSS keyframe animations, JavaScript `requestAnimationFrame` timeline synchronization, smooth scroll reveals, and active navigation indicators.

---

## 📂 File Architecture

```
Harshitha/
├── index.html         # Main semantic HTML5 webpage with Cinematic Intro and all 7 sections
├── images/
│   └── harshitha.jpg  # Harshitha Palaparthi's authentic professional portrait
├── css/
│   └── styles.css     # Modular design tokens, typography, layouts, intro keyframe animations
├── js/
│   └── main.js        # Intro controller, mobile menu toggle, scroll reveal, active nav, form feedback
└── README.md          # Guide for previewing and customizing placeholders
```

---

## 🩺 Sections Included

0. **Cinematic 4-Scene Animated Video Introduction (0–12s):** Full-screen sequence introducing Harshitha, showcasing her 5 years of experience, core clinical pillars, and seamless fade into the main site.
1. **Home / Hero:** Personal headline, 5 years practice experience highlight, clinician avatar card, call-to-action buttons, and prominent **LinkedIn Profile** button.
2. **About Me:** Clinical philosophy, holistic patient-care approach, diagnostic evaluation, and recovery pillars.
3. **Qualifications:** Academic education (e.g. BPT/MPT), licensing board registrations, and specialized manual therapy/BLS certifications.
4. **Professional Experience:** Interactive timeline highlighting clinical roles, hospital/rehabilitation clinic settings, and key patient outcomes.
5. **Areas of Expertise:** 6 core specializations (Musculoskeletal, Sports Injuries, Post-Surgical Rehab, Spine Care, Chronic Pain, and Geriatric Mobility).
6. **Skills:** Clinical proficiencies grouped into Manual Therapy, Exercise Prescription, and Assessment Modalities.
7. **LinkedIn Showcase:** Dedicated networking banner linking directly to Harshitha's LinkedIn profile.
8. **Contact & Consultation:** Direct contact card (email, phone, clinic location, hours) alongside an interactive consultation inquiry form.
9. **Footer:** Quick navigation, medical disclaimer, and professional copyright notice.

---

## 🔍 How to Preview the Website

You can view the website locally using any of these simple methods:

### Method 1: Direct File Open (Fastest)
1. Open your Finder on Mac.
2. Navigate to `Downloads` &rarr; `Harshitha`.
3. Double-click **`index.html`** (or right-click &rarr; *Open With* &rarr; Google Chrome / Safari / Firefox).

### Method 2: Local Python Server (Recommended for realistic HTTP environment)
Open Terminal and run:
```bash
cd /Users/sweety/Downloads/Harshitha
python3 -m http.server 8000
```
Then open your browser and visit: **`http://localhost:8000`**

### Method 3: VS Code Live Server
If you use Visual Studio Code:
1. Open the `/Users/sweety/Downloads/Harshitha` folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 📝 Customization Checklist (Placeholders)

Per your instructions, **no qualifications, certifications, or contact details were invented**. All missing details are marked with obvious, easy-to-replace placeholder tags like `[placeholder]`.

To personalize the website, open `index.html` and search for `[` to update:

| Item | Placeholder in `index.html` | Status / Example Value |
|---|---|---|
| **LinkedIn URL** | `harshitha-palaparthi-869b08230` | ✅ **Configured:** `https://www.linkedin.com/in/harshitha-palaparthi-869b08230` |
| **Full Name** | `Harshitha Palaparthi` | ✅ **Configured:** Integrated across website |
| **Years of Practice** | `5 Years` | ✅ **Configured:** 5 Years of Physiotherapy Practice Experience |
| **Personal Bio** | `[Personal Statement / Biography Placeholder]` | Your personal journey and philosophy |
| **Primary Degree** | `[Bachelor of Physiotherapy (BPT)]` | BPT, e.g., Rajiv Gandhi University / Manipal |
| **Post-Grad / Specialty**| `[Master of Physiotherapy (MPT)]` | MPT in Orthopedics / Sports / Neuro |
| **License Number** | `[License #XXXXXX]` | PT-10492 |
| **Work Experience** | `[Hospital / Clinic Name]`, `[Month, Year – Present]` | Apollo Hospitals, 2021 – Present |
| **Email Address** | `[harshitha.physio@example.com]` | `harshitha@yourclinic.com` |
| **Phone Number** | `[+1 (555) 000-0000]` | `+91 98765 43210` |
| **Clinic Address** | `[Clinic Name, Suite #, Address, City]` | 123 Healthcare Ave, Indiranagar, Bengaluru |
| **Consultation Hours** | `[Monday – Friday: 9:00 AM – 6:00 PM]` | Your actual operating hours |

---

## 📷 Images Used
All images are high-resolution, professional healthcare photographs featuring a female physiotherapist treating patients in clinical settings:
- **Hero Rehabilitation Consultation:** `pexels-photo-5793700` — Female physiotherapist conducting arm rehabilitation and joint mobility therapy.
- **Clinical Spine & Postural Examination:** `pexels-photo-4506110` — Female physiotherapist performing spinal posture alignment and clinical assessment.
- **Active Rehabilitation in Action:** `pexels-photo-4506073` — Female physical therapist guiding and supervising a patient through therapeutic exercise recovery.

To replace any image with Harshitha's actual clinical photos or portrait, simply place the files in an `images/` directory and update the `src` attribute in `index.html`.
