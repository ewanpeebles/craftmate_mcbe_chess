import { ActionFormData } from '@minecraft/server-ui'

const craftmateMainMenu = new ActionFormData()
    .title("CraftMate")
    .button("Play a match", "textures/ui/craftmate_play_match.png")
    .button("Changelog", "textures/ui/craftmate_changelog.png")
    .label("Save / Load Game coming in 1.1.0!");

export { craftmateMainMenu }