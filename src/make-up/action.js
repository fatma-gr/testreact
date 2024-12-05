export const ajouter = (products) => {
    return { type: "ajouter", payload: products };
}

export const supprimer = (id) => {
    return { type: "supprimer", payload: id };
}
