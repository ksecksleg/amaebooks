@echo off
REM AMA eBooks - Quick Setup Script (Windows)
REM Developed by Godmisoft

echo.
echo ===============================================
echo    AMA eBooks - Deployment Setup
echo    Ang Malayang Agila Digital Library
echo ===============================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git first:
    echo https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo SUCCESS: Git is installed
echo.

REM Get user information
set /p github_username="Enter your GitHub username: "
set /p repo_name="Enter repository name (default: ama-ebooks): "
if "%repo_name%"=="" set repo_name=ama-ebooks

echo.
echo Configuration:
echo   GitHub Username: %github_username%
echo   Repository Name: %repo_name%
echo.

set /p confirm="Is this correct? (y/n): "
if /i not "%confirm%"=="y" (
    echo Setup cancelled.
    pause
    exit /b 0
)

echo.
echo Setting up Git repository...

REM Initialize git if not already initialized
if not exist .git (
    git init
    echo SUCCESS: Git initialized
) else (
    echo SUCCESS: Git already initialized
)

REM Configure git (if not configured)
for /f "delims=" %%i in ('git config user.name') do set git_name=%%i
for /f "delims=" %%i in ('git config user.email') do set git_email=%%i

if "%git_name%"=="" (
    set /p name="Enter your name for Git commits: "
    git config user.name "%name%"
)

if "%git_email%"=="" (
    set /p email="Enter your email for Git commits: "
    git config user.email "%email%"
)

echo SUCCESS: Git configured
echo.

REM Add all files
echo Adding files to Git...
git add .
echo SUCCESS: Files added
echo.

REM Create initial commit
echo Creating initial commit...
git commit -m "Initial commit: AMA eBooks - Ang Malayang Agila Digital Library" -m "- PWA-ready eBook reader" -m "- Admin panel for content management" -m "- Offline support" -m "- Beautiful UI with animations" -m "- Developed by Godmisoft"
echo SUCCESS: Commit created
echo.

REM Set main branch
git branch -M main
echo SUCCESS: Branch set to 'main'
echo.

REM Add GitHub remote
set repo_url=https://github.com/%github_username%/%repo_name%.git
echo Adding GitHub remote...
echo   URL: %repo_url%

git remote | findstr "origin" >nul
if errorlevel 1 (
    git remote add origin %repo_url%
    echo SUCCESS: Remote added
) else (
    git remote set-url origin %repo_url%
    echo SUCCESS: Remote updated
)

echo.
echo ===============================================
echo SUCCESS: Setup Complete!
echo ===============================================
echo.
echo Next Steps:
echo.
echo 1. Create GitHub Repository:
echo    - Go to: https://github.com/new
echo    - Repository name: %repo_name%
echo    - DO NOT initialize with README
echo    - Click 'Create repository'
echo.
echo 2. Push to GitHub:
echo    - Run: git push -u origin main
echo    - Enter your GitHub credentials
echo    - (Use Personal Access Token as password)
echo.
echo 3. Deploy to Vercel:
echo    - Go to: https://vercel.com
echo    - Sign in with GitHub
echo    - Import '%repo_name%' repository
echo    - Click 'Deploy'
echo.
echo ===============================================
echo.
echo For detailed instructions, see:
echo    GITHUB_VERCEL_DEPLOYMENT.md
echo.
echo Need a Personal Access Token?
echo    https://github.com/settings/tokens
echo.
echo Developed by Godmisoft - Heber Mayormita
echo ===============================================
echo.
pause
