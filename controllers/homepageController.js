export const  getHomepage = (req, res, next) => {
    res.render("pages/homepage", {
        title: "Homepage",});
};
