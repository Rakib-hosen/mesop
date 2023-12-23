from typing import Any, Callable

import mesop.components.text_input.text_input_pb2 as text_input_pb
from mesop.component_helpers import insert_component, register_event_handler
from mesop.utils.validate import validate


@validate
def text_input(
  *,
  label: str,
  on_change: Callable[[Any], Any],
  default_value: str = "",
  key: str | None = None,
):
  """
  Creates a text input.

  Args:
      label: The text to be displayed
      on_change: Called when user changes text input value.
  """
  insert_component(
    key=key,
    type_name="text_input",
    proto=text_input_pb.TextInputType(
      label=label,
      default_value=default_value,
      on_change_handler_id=register_event_handler(on_change, event=Any),
    ),
  )
