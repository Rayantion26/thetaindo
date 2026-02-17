# Deploy to GitHub Pages
# Build the project
npm run build

# Copy index.html as 404.html for SPA routing
Copy-Item "dist/index.html" "dist/404.html"

# Navigate to build output
Set-Location dist

# Initialize git and push to gh-pages branch
git init
git checkout -b gh-pages
git add -A
git commit -m "deploy"

# Push to remote (force push to gh-pages branch)
git push -f https://github.com/Rayantion26/thetaindo.git gh-pages

# Return to project root
Set-Location ..
