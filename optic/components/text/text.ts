import { Component, Input } from "@angular/core";
import { Key, Type } from "optic/protos/ui_ts_proto_pb/protos/ui_pb";
import { TextType } from "optic/optic/components/text/text_ts_proto_pb/optic/components/text/text_pb";

@Component({
  selector: "optic-text",
  templateUrl: "text.html",
  standalone: true,
})
export class TextComponent {
  @Input({ required: true }) type!: Type;
  @Input() key!: Key;
  _config: TextType;

  ngOnChanges() {
    this._config = TextType.deserializeBinary(
      this.type.getValue() as Uint8Array,
    );
  }

  config(): TextType {
    return this._config;
  }
}