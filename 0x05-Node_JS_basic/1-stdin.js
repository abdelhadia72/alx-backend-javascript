function stdin () {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.on('readable', () => {
    const name = process.stdin.read();
    console.log(`Your name is: ${name}`);
  });
}

stdin();
