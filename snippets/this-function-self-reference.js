function selfReferWithThis() {
  console.log("I'm gonna try self-referring with this...");

  // You end up self-referring with the function's name anyway.
  // You could avoid it by using `typeof this == 'function'`,
  // but then you'd be able to bind to other functions, and that's
  // no longer self-reference.
  if (this == selfReferWithThis) {
    return console.log('Look, self-referring with `this`!');
  }

  this();
}

selfReferWithThis.call(selfReferWithThis);
