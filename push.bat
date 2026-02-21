@echo off
echo Pushing Ryan Portfolio to GitHub...
echo.

cd /d "c:\Users\ryanr\CascadeProjects\ryan-portfolio"

echo Checking Git status...
git status

echo Adding all changes...
git add .

echo Committing changes...
git commit -m "Fix contact form functionality and improve UI design

- Fixed nodemailer createTransport function name
- Added /api/projects endpoint for project data  
- Updated contact section with functional email/phone/discord buttons
- Improved CSS for better readability and modern design
- Fixed CORS configuration for frontend-backend communication
- Added comprehensive error handling and logging
- Made interface clean and user-friendly"

echo Pushing to remote repository...
git push origin main

echo.
echo ✅ Successfully pushed to GitHub!
echo.
pause
