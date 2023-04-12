export const getHomepage = (req, res, next) => {
    res.render("homepage", {
        title: "Homepage",
    });
};
