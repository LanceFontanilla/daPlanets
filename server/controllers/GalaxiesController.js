import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .post('', this.createGalaxy)
            .get('', this.getGalaxy)
            .put('/:galaxyId', this.editGalaxy)
    }

    async createGalaxy(request, response, next) {
        try {
            const body = request.body
            const newGalaxy = await galaxiesService.createGalaxy(body)
            response.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxy(request, response, next) {
        try {
            const query = request.query
            const galaxies = await galaxiesService.getGalaxies(query)
            response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async editGalaxy(request, response, next) {
        try {
            const updates = request.body
            const galaxyId = request.params.galaxyId
            const editedGalaxy = await galaxiesService.editGalaxy(galaxyId, updates)
            response.send(editedGalaxy)
        } catch (error) {
            next(error)
        }
    }

}