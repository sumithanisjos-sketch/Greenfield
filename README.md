# Greenfield College Admission Website

A beginner-friendly, responsive four-page college admission website built with HTML, CSS and JavaScript.

## Pages
1. `index.html` — Home page
2. `courses.html` — Course information
3. `admission.html` — Admission steps and enquiry form
4. `contact.html` — Contact information

## Run locally
- Extract the project folder.
- Open `index.html` in Chrome, or open the folder in VS Code and use the Live Server extension.
- Internet is needed for the Google Fonts and remote hero background image. The website layout itself is local.

## Important before publishing
- Replace the sample college name, course information, address, phone and email with official details.
- The enquiry form currently demonstrates browser-side validation and a success message only. It does **not** send or store student information. Connect a backend or a form service before using it for real enquiries.
- Update the footer year if needed.

## Deploy using GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a new public repository, for example `college-admission-website`.
3. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root (not buried inside another folder).
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait for GitHub Pages to publish. Your website link will appear in the Pages section.

## Optional Git commands
Run these commands in the project folder after creating an empty GitHub repository:

```bash
git init
git add .
git commit -m "Create college admission website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/college-admission-website.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub username.
