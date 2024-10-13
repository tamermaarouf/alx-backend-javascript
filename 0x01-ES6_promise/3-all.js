#!/usr/bin/node
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = Promise.all([uploadPhoto(), createUser()]);
  promise
    .then((data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`));
}
