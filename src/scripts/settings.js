export const tidy5eSettings = function () {

  // Tidy5e Global Settings
  game.settings.register("tidy5e-sheet", "useExpandedSheet", {
    name: `Global: ${game.i18n.localize("TIDY5E.Settings.UseExpandedSheet.name")}`,
    hint: game.i18n.localize("TIDY5E.Settings.UseExpandedSheet.hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
	});
	
	game.settings.register("tidy5e-sheet", "disableRightClick", {
    name: `Global: Disable Right Click Context Menu`,
    hint: "In case of module conflicts you can diable the right click context menu. Instead a menu button will appear next to items.",
    scope: "world",
    config: true,
    default: false,
		type: Boolean
	});

  game.settings.register("tidy5e-sheet", "gmCanAlwaysEdit", {
    name: `Global: GM can always edit Player Character Sheets`,
    hint: '',
    scope: "world",
    config: true,
    default: false,
    type: Boolean
	});
	
	game.settings.register("tidy5e-sheet", "gmOnlyEffectsEdit", {
    name: `Global: Only GMs can edit Effects`,
    hint: "Only GMs can edit character's effects. Players are only able to see active Effects on their character.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
	});
	
	game.settings.register("tidy5e-sheet", "alwaysShowQuantity", {
    name: `Global: Always show item quantity`,
    hint: 'Always displays item quantity without hover even if 1.',
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

	// game.settings.register("tidy5e-sheet", "useRoundPortraits", {
	// 	name: `Global: ${game.i18n.localize("TIDY5E.Settings.UseRoundPortraits.name")}`,
	// 	hint: game.i18n.localize("TIDY5E.Settings.UseRoundPortraits.hint"),
	// 	scope: "world",
	// 	config: true,
	// 	default: false,
	// 	type: Boolean
	// });

	game.settings.register("tidy5e-sheet", "portraitStyle", {
		name: `Global: Actor Portraits`,
		hint: game.i18n.localize("TIDY5E.Settings.UseRoundPortraits.hint"),
		scope: "world",
		config: true,
		default: false,
		type: String,
		choices: {
			"round": "use round portraits",
			"square": "use square portraits"
		},
  	default: "round"
	});

	game.settings.register("tidy5e-sheet", "hpOverlayBorder", {
		name: `Global: ${game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.hint"),
		scope: "world",
		config: true,
		default: 0,
		type: Number
	});

	game.settings.register("tidy5e-sheet", "disableExhaustion", {
		name: `Global: ${game.i18n.localize("TIDY5E.Settings.DisableExhaustion.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.DisableExhaustion.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
	
	game.settings.register("tidy5e-sheet", "disableInspiration", {
		name: `Global: ${game.i18n.localize("TIDY5E.Settings.DisableInspiration.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.DisableInspiration.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
  });
  
  // Tidy5e NPC Settings
  
  // game.settings.register("tidy5e-sheet", "useRoundNpcPortraits", {
  //   name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.UseRoundPortraits.name")}`,
  //   hint: game.i18n.localize("TIDY5E.Settings.UseRoundPortraits.hint"),
  //   scope: "world",
  //   config: true,
  //   default: false,
  //   type: Boolean
  // });

  game.settings.register("tidy5e-sheet", "npcHpOverlayBorder", {
    name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.name")}`,
    hint: game.i18n.localize("TIDY5E.Settings.HpOverlayBorder.hint"),
    scope: "world",
    config: true,
    default: 0,
    type: Number
  });

  game.settings.register("tidy5e-sheet", "disableNpcHpOverlay", {
    name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.DisableHpOverlay.name")}`,
    hint: game.i18n.localize("TIDY5E.Settings.DisableHpOverlay.hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tidy5e-sheet", "showNpcResting", {
    name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.showNpcResting.name")}`,
    hint: game.i18n.localize("TIDY5E.Settings.showNpcResting.hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tidy5e-sheet", "npcAlwaysShowTraits", {
    name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.AlwaysShowTraits.name")}`,
    hint: game.i18n.localize("TIDY5E.Settings.AlwaysShowTraits.hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tidy5e-sheet", "npcAlwaysShowSkills", {
    name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.AlwaysShowSkills.name")}`,
    hint: game.i18n.localize("TIDY5E.Settings.AlwaysShowSkills.hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tidy5e-sheet", "npcLinkMarker", {
    name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.MarkLinked.name")}`,
    hint: game.i18n.localize("TIDY5E.Settings.MarkLinked.hint"),
    scope: "world",
    config: true,
		type: String,
		choices: {
			"default": "no link marker (default)",
			"unlinked": "highlight unlinked tokens",
			"both": "highlight linked and unlinked tokens"
		},
		default: 'default'
  });

  // game.settings.register("tidy5e-sheet", "npcMarkLinked", {
  //   name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.MarkLinked.name")}`,
  //   hint: game.i18n.localize("TIDY5E.Settings.MarkLinked.hint"),
  //   scope: "world",
  //   config: true,
  //   default: false,
  //   type: Boolean
  // });

  // game.settings.register("tidy5e-sheet", "npcMarkUnlinked", {
  //   name: `${game.i18n.localize("TIDY5E.Settings.NpcLabel")} ${game.i18n.localize("TIDY5E.Settings.MarkUnlinked.name")}`,
  //   hint: game.i18n.localize("TIDY5E.Settings.MarkUnlinked.hint"),
  //   scope: "world",
  //   config: true,
  //   default: false,
  //   type: Boolean
  // });

  // Tidy5e User Settings

	game.settings.register("tidy5e-sheet", "colorScheme", {
    name: `User: Sheet Color Theme`,
    hint: game.i18n.localize("TIDY5E.Settings.colorScheme.hint"),
		scope: "user",
		config: true,
		type: String,
		choices: {
			"light": "use default color scheme",
			"dark": "use dark color scheme"
		},
		default: 'light',
		onChange: data => {
      data === 'dark' ? document.body.classList.add("tidy5eDark"):document.body.classList.remove("tidy5eDark");
     }
	});
	
  const colorScheme = game.settings.get('tidy5e-sheet', "colorScheme");
  if (colorScheme === 'dark') {
    document.body.classList.add("tidy5eDark");
  }
	
		game.settings.register("tidy5e-sheet", "hideClassList", {
			name: `User: ${game.i18n.localize("TIDY5E.Settings.HideClassList.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HideClassList.hint"),
			scope: "user",
			config: true,
			default: false,
			type: Boolean
		});

	game.settings.register("tidy5e-sheet", "disableHpOverlay", {
		name: `User: ${game.i18n.localize("TIDY5E.Settings.DisableHpOverlay.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.DisableHpOverlay.hint"),
		scope: "user",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register("tidy5e-sheet", "noInspirationAnimation", {
		name: `User: ${game.i18n.localize("TIDY5E.Settings.DisableInspirationAnimation.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.DisableInspirationAnimation.hint"),
		scope: "user",
		config: true,
		default: false,
		type: Boolean
	});
	
		game.settings.register("tidy5e-sheet", "hideIfZero", {
			name: `User: ${game.i18n.localize("TIDY5E.Settings.HideIfZero.name")}`,
			hint: game.i18n.localize("TIDY5E.Settings.HideIfZero.hint"),
			scope: "user",
			config: true,
			default: false,
			type: Boolean
		});
	
	game.settings.register("tidy5e-sheet", "inspirationOnHover", {
		name: `User: ${game.i18n.localize("TIDY5E.Settings.InspirationOnHover.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.InspirationOnHover.hint"),
		scope: "user",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register("tidy5e-sheet", "exhaustionOnHover", {
		name: `User: ${game.i18n.localize("TIDY5E.Settings.ExhaustionOnHover.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.ExhaustionOnHover.hint"),
		scope: "user",
		config: true,
		default: false,
		type: Boolean
	});

	// game.settings.register("tidy5e-sheet", "restOnHover", {
	// 	name: `User: ${game.i18n.localize("TIDY5E.Settings.RestOnHover.name")}`,
	// 	hint: game.i18n.localize("TIDY5E.Settings.RestOnHover.hint"),
	// 	scope: "user",
	// 	config: true,
	// 	default: false,
	// 	type: Boolean
	// });
	
	game.settings.register("tidy5e-sheet", "pcToggleTraits", {
		name: `User: ${game.i18n.localize("TIDY5E.Settings.PcToggleTraits.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.PcToggleTraits.hint"),
		scope: "user",
		config: true,
		default: false,
		type: Boolean
	});
	
  game.settings.register("tidy5e-sheet", "moveTraits", {
		name: `User: ${game.i18n.localize("TIDY5E.Settings.MoveTraits.name")}`,
		hint: game.i18n.localize("TIDY5E.Settings.MoveTraits.hint"),
    scope: "user",
    config: true,
    default: false,
    type: Boolean
	});

}