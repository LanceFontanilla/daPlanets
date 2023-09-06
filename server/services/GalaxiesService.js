import { dbContext } from "../db/DbContext.js";


class GalaxiesService {
    async createGalaxy(body) {
        const newGalaxy = await dbContext.Galaxies.create(body)
        return newGalaxy
    }

    async getGalaxies(query) {
        const galaxies = await dbContext.Galaxies.find(query)
        return galaxies
    }

    async editGalaxy(galaxyId, updates) {
        const originalGalaxy = await dbContext.Galaxies.findById(galaxyId)
        if (!originalGalaxy) throw new Error(`Unable to find exhibit at ${galaxyId}`)

        originalGalaxy.name = updates.name || originalGalaxy.name
        originalGalaxy.type = updates.type || originalGalaxy.type

        await originalGalaxy.save()
        return originalGalaxy
    }
}

export const galaxiesService = new GalaxiesService