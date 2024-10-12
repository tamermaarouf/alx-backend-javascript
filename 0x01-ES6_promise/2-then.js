export default function handleResponseFromAPI (promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve();
    } else {
      reject(Error());
    }
  }).then(() => ({
    status: 200,
    body: 'Success'
  })).catch((Error) => ({})).finally(() => {
    console.log('Got a response from the API');
  });
}
