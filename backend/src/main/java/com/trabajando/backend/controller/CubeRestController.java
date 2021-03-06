package com.trabajando.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.mongodb.BasicDBObject;
import com.trabajando.backend.model.Cube;
import com.trabajando.backend.repository.CubeRepository;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
@RequestMapping("/v1/paralelepipedo")
public class CubeRestController {

	@Autowired
	private CubeRepository cubeRepository;

	@GetMapping(value = "/{id}")
	public BasicDBObject findById(@PathVariable("id") String id) {
		try {
			Cube cube = cubeRepository.findById(id).get();
			Float volumen = cube.getFondo() * cube.getAlto() * cube.getAncho();
			BasicDBObject vol = new BasicDBObject("volumen", volumen);
			return vol;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Id no encontrada en la base de datos", e);

		}

	}

	@PostMapping(value = "/")
	public BasicDBObject save(@RequestBody Cube cube) {
		try {
			cube.setDate(java.time.LocalDate.now());
			BasicDBObject id = new BasicDBObject("id", cubeRepository.save(cube).get_id());
			return id;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}

	}
}
