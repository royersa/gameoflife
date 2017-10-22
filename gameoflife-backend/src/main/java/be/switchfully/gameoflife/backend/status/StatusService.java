package be.switchfully.gameoflife.backend.status;

import org.springframework.stereotype.Component;

@Component
public class StatusService {

    public String getStatus() {
        return "Up and running!";
    }
}
