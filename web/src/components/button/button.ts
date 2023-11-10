import { Component, Input } from "@angular/core";
import * as pb from "optic/protos/ui_ts_proto_pb/protos/ui_pb";
import { ChannelService } from "../../services/channel_service";

@Component({
  selector: "app-button",
  templateUrl: "button.html",
  standalone: true,
})
export class ButtonComponent {
  @Input() config!: pb.ButtonComponent;
  isChecked = false;

  constructor(private readonly channelService: ChannelService) {}

  handleClick(event: any) {
    const request = new pb.UiRequest();
    const userAction = new pb.UserAction();
    userAction.setClick(new pb.Click());
    userAction.setActionType(this.config.getOnClick()!);
    request.setUserAction(userAction);
    this.channelService.dispatch(request);
  }
}
