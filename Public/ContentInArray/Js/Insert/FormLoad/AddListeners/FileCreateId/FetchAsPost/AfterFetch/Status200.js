let StartFunc = ({ inResponse }) => {
    Swal.fire({
        text: `${inResponse}`,
        confirmButtonText: 'OK'
    });
};

export { StartFunc };
