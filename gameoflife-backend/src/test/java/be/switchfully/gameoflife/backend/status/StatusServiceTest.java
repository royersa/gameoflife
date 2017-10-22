package be.switchfully.gameoflife.backend.status;

import be.switchfully.gameoflife.backend.UnitTest;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.mockito.InjectMocks;

import static org.junit.Assert.*;

public class StatusServiceTest extends UnitTest{

    @InjectMocks
    public StatusService statusService;

    @Test
    public void getStatus() {
        String actualStatus = statusService.getStatus();
        Assertions.assertThat(actualStatus).isEqualTo("Up and running!");
    }

}