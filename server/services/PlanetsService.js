import { dbContext } from "../db/DbContext.js";




class PlanetsService {

    async createPlanet(body) {
        const newPlanet = await dbContext.Planets.create(body)

        return newPlanet
    }

    async getPlanets(query) {
        const planets = await dbContext.Planets.find(query).populate('galaxy')
        return planets
    }

    async getPlanetsByGalaxyId(galaxyId) {
        const planets = await dbContext.Planets.find({ galaxyId: galaxyId }).populate('galaxy')

        return planets
    }


}

export const planetsService = new PlanetsService()