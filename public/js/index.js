let socket = io();

socket.on("connect", () => {
    console.log("Connected to server.");

    socket.emit("createMessage", {
        from: "WDJ",
        text: "Wats going on!",
    });
});

socket.on("disconnect", () => {
    console.log("disconnected from server.");
});

socket.on("newMessage", (message) => {
    console.log("newMessage", message);
});
