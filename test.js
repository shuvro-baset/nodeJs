function makeGuestList() {
    let name = 'Joe';
    return function () {
        console.log(name);
    }
}
let name = 'Nitin';
let guest = makeGuestList();
guest()