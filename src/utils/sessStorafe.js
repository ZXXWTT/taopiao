class SessStorage {
    get(key) {
        let value = sessionStorage.getItem(key) || ""

        if (value.includes("{") || value.includes("[")) {
            value = JSON.parse(value)
        }
        return value
    }

    set(key, value) {
        if (typeof value === "object") {
            value = JSON.stringify(value)
        }
        sessionStorage.setItem(key, value)
    }
}

export default new SessStorage()
