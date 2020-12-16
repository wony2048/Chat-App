let socket = io();

socket.on("connect", () => {
    console.log("Connected to server.");

    // socket.emit("createMessage", {
    //     from: "WDJ",
    //     text: "Wats going on!",
    // });
});

socket.on("disconnect", () => {
    console.log("disconnected from server.");
});

socket.on("newMessage", (message) => {
    console.log("newMessage", message);
});

socket.emit(
    "createMessage",
    {
        from: "John",
        text: "Hey",
    },
    (message) => console.log("Got it.", message)
);

document.querySelector("#submit-btn").addEventListener("click", (e) => {
    e.preventDefault();

    socket.emit(
        "createMessage",
        {
            from: "User",
            text: document.querySelector('input[name="message"]').value,
        },
        () => {}
    );
});
