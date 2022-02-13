const maxString = (arr) =>
    arr.reduce((prev, current) =>
        current.length > prev.length ? current : prev
    );

export {maxString}