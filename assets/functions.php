<?php

	function loadTarteaucitron()
	{
		
		wp_register_script('tarteaucitron_param', plugins_url('tarteaucitron_init.js', __FILE__));
		
		/*** handle PLL language ***/
		$defaultLang = function_exists('pll_default_language') ? pll_default_language() : false;
		
		$currentLang = function_exists('pll_current_language') ? pll_current_language() : false;
		
		$currentPolicyUrl = '';
	
		if (function_exists ('pll_get_post_translations') ) {
			
			$privacyPolicyPages = pll_get_post_translations( get_option( 'wp_page_for_privacy_policy' ) );
			
			foreach ( $privacyPolicyPages as $key => $value) {
				
				$slug = get_post( $value)->post_name;
				
				if ( $currentLang === $key ) {
					
					if ($key != $defaultLang) {
						
						$currentPolicyUrl = '/' . $key . '/' . $slug . '/';
						
					} else {
						
						$currentPolicyUrl = '/' . $slug . '/';
					
					}
								
				}
				
				
				
			}
		
		}
		
		wp_localize_script('tarteaucitron_param', 'privacy_policy_page_url', [$currentPolicyUrl]);
		
		
		if ( is_user_logged_in() ) // in fine utiliser la structure conditionnelle suivante if ( ! is_user_logged_in() )
		{
						
			wp_enqueue_script( 'tarteaucitron', plugins_url( '/tarteaucitron/tarteaucitron.js', __FILE__) ); //Il est donc nécessaire de créer un répertoire /tarteaucitron/ dans /assets/ qui contiendra tarteaucitron.js voir https://github.com/AmauriC/tarteaucitron.js
			
			wp_enqueue_script('tarteaucitron_param', plugins_url('tarteaucitron_init.js', __FILE__)); //On charge les paramètres
			
			wp_enqueue_style('tarteaucitron_css', plugins_url('custom.css', __FILE__));
		}
	}
	
	add_action('wp_enqueue_scripts', 'loadTarteaucitron', 99); //On hook sur wp_enqueue_scripts et on met la priorité maximale
