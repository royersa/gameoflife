package be.switchfully.gameoflife.backend.world;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = WorldController.WORLD_BASE_URL)
public class WorldController {

    static final String WORLD_BASE_URL = "/api/world";
    private static Logger logger = Logger.getLogger(WorldController.class);

    @PostMapping(value = "/phase")
    public List<List<Boolean>> getWorld(@RequestBody List<List<Boolean>> currentWorld){
        logger.info(currentWorld);
        Collections.shuffle(currentWorld);
        return currentWorld;
    }

}
