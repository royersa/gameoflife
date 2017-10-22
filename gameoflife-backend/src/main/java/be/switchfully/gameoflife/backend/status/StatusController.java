package be.switchfully.gameoflife.backend.status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = StatusController.STATUS_BASE_URL)
public class StatusController {

    static final String STATUS_BASE_URL = "/api/status";

    private final StatusService statusService;

    public StatusController(@Autowired StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping(path = "/check", produces = "text/plain;charset=UTF-8")
    public String getStatusCheck() {
        return statusService.getStatus();
    }

}
