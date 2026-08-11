function recursion() {
  recursion();  // InternalError: Too much recursion
}
recursion();