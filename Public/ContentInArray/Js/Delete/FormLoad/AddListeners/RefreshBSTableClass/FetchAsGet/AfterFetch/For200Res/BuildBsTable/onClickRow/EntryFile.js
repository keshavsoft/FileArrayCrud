import { StartFunc as FetchDelete } from "./FetchDelete/Entry.js";

const StartFunc = async (row, $element, field) => {
    if (field === "Delete") {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            confirmButtonText: "Yes, delete it!",
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            if ("pk" in row) {
                await FetchDelete({ inRowPk: row.pk });
            };
        };
    };
};

export { StartFunc };
