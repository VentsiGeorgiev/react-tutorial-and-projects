function paginate(data) {

    const itemsPerPage = 8;
    const numberOfPages = Math.ceil(data.length / itemsPerPage);

    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        const end = start + itemsPerPage;
        return data.slice(start, end);
    });
    return newFollowers;

}

export default paginate;