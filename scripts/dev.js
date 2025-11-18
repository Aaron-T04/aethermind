const { exec } = require('child_process');
const { spawn } = require('child_process');

// Try to kill ports, but don't fail if it doesn't work
console.log('Killing processes on ports 3000 and 3001...');
exec('npx kill-port 3000 3001', (error) => {
  // Ignore errors - ports might not be in use
  if (error) {
    console.log('No processes found on ports 3000/3001 (or kill-port not available)');
  }
  
  // Small delay to ensure ports are released
  setTimeout(() => {
    console.log('Starting Next.js dev server...');
    // Start Next.js dev server
    const next = spawn('next', ['dev'], {
      stdio: 'inherit',
      shell: true
    });
    
    next.on('error', (err) => {
      console.error('Failed to start Next.js:', err);
      process.exit(1);
    });
  }, 500);
});

