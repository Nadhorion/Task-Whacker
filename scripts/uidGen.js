
let mostRecentUid = 0;

/**
 * 
 * @returns {integer}
 */
function generateUID() {

    let newUID = mostRecentUid + 1;
    mostRecentUid = newUID;

    return newUID;

}

//'check for dupelicates' function if need

// reset most recentUid function when needed