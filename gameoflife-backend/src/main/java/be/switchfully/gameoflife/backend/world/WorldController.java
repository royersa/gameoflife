package be.switchfully.gameoflife.backend.world;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/gameoflife")
public class WorldController {

    private static Logger logger = Logger.getLogger(WorldController.class);

    @PostMapping(value = "/world")
    public List<List<Boolean>> getWorld(@RequestBody List<List<Boolean>> currentWorld){
        logger.info(currentWorld);
        return currentWorld;
    }

}
