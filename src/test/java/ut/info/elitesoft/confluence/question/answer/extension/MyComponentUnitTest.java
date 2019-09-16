package ut.info.elitesoft.confluence.question.answer.extension;

import org.junit.Test;
import info.elitesoft.confluence.question.answer.extension.api.MyPluginComponent;
import info.elitesoft.confluence.question.answer.extension.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}