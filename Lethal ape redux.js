📦
206496 /OGFMH.js
120147 /OGFMH.js.map
✄
// OGFMH.ts
// @ts-nocheck
var hooksInstalled = false;
var hue = 0;
var IL2CPP_API_NAMES = [
  "il2cpp_init",
  "il2cpp_init_utf16",
  "il2cpp_shutdown",
  "il2cpp_set_config_dir",
  "il2cpp_set_data_dir",
  "il2cpp_set_temp_dir",
  "il2cpp_set_commandline_arguments",
  "il2cpp_set_commandline_arguments_utf16",
  "il2cpp_set_config_utf16",
  "il2cpp_set_config",
  "il2cpp_set_memory_callbacks",
  "il2cpp_memory_pool_set_region_size",
  "il2cpp_memory_pool_get_region_size",
  "il2cpp_get_corlib",
  "il2cpp_add_internal_call",
  "il2cpp_resolve_icall",
  "il2cpp_alloc",
  "il2cpp_free",
  "il2cpp_array_class_get",
  "il2cpp_array_length",
  "il2cpp_array_get_byte_length",
  "il2cpp_array_new",
  "il2cpp_array_new_specific",
  "il2cpp_array_new_full",
  "il2cpp_bounded_array_class_get",
  "il2cpp_array_element_size",
  "il2cpp_assembly_get_image",
  "il2cpp_class_enum_basetype",
  "il2cpp_class_from_system_type",
  "il2cpp_class_is_inited",
  "il2cpp_class_is_generic",
  "il2cpp_class_is_inflated",
  "il2cpp_class_is_assignable_from",
  "il2cpp_class_is_subclass_of",
  "il2cpp_class_has_parent",
  "il2cpp_class_from_il2cpp_type",
  "il2cpp_class_from_name",
  "il2cpp_class_get_element_class",
  "il2cpp_class_get_events",
  "il2cpp_class_get_fields",
  "il2cpp_class_get_nested_types",
  "il2cpp_class_get_interfaces",
  "il2cpp_class_get_properties",
  "il2cpp_class_get_property_from_name",
  "il2cpp_class_get_field_from_name",
  "il2cpp_class_get_methods",
  "il2cpp_class_get_method_from_name",
  "il2cpp_class_get_name",
  "il2cpp_class_get_namespace",
  "il2cpp_class_get_parent",
  "il2cpp_class_get_declaring_type",
  "il2cpp_class_instance_size",
  "il2cpp_class_num_fields",
  "il2cpp_class_is_valuetype",
  "il2cpp_class_is_blittable",
  "il2cpp_class_value_size",
  "il2cpp_class_get_flags",
  "il2cpp_class_is_abstract",
  "il2cpp_class_is_interface",
  "il2cpp_class_array_element_size",
  "il2cpp_class_from_type",
  "il2cpp_class_get_type",
  "il2cpp_class_get_type_token",
  "il2cpp_class_has_attribute",
  "il2cpp_class_has_references",
  "il2cpp_class_is_enum",
  "il2cpp_class_get_image",
  "il2cpp_class_get_assemblyname",
  "il2cpp_class_get_rank",
  "il2cpp_class_get_data_size",
  "il2cpp_class_get_static_field_data",
  "il2cpp_stats_dump_to_file",
  "il2cpp_stats_get_value",
  "il2cpp_domain_get",
  "il2cpp_domain_assembly_open",
  "il2cpp_domain_get_assemblies",
  "il2cpp_raise_exception",
  "il2cpp_exception_from_name_msg",
  "il2cpp_get_exception_argument_null",
  "il2cpp_format_exception",
  "il2cpp_format_stack_trace",
  "il2cpp_unhandled_exception",
  "il2cpp_native_stack_trace",
  "il2cpp_field_get_name",
  "il2cpp_field_get_flags",
  "il2cpp_field_get_from_reflection",
  "il2cpp_field_get_parent",
  "il2cpp_field_get_object",
  "il2cpp_field_get_offset",
  "il2cpp_field_get_type",
  "il2cpp_field_get_value",
  "il2cpp_field_get_value_object",
  "il2cpp_field_has_attribute",
  "il2cpp_field_set_value",
  "il2cpp_field_set_value_object",
  "il2cpp_field_is_literal",
  "il2cpp_gc_collect",
  "il2cpp_gc_collect_a_little",
  "il2cpp_gc_start_incremental_collection",
  "il2cpp_gc_enable",
  "il2cpp_gc_disable",
  "il2cpp_gc_is_disabled",
  "il2cpp_gc_set_mode",
  "il2cpp_gc_is_incremental",
  "il2cpp_gc_get_max_time_slice_ns",
  "il2cpp_gc_set_max_time_slice_ns",
  "il2cpp_gc_get_used_size",
  "il2cpp_gc_get_heap_size",
  "il2cpp_gc_foreach_heap",
  "il2cpp_stop_gc_world",
  "il2cpp_start_gc_world",
  "il2cpp_gc_alloc_fixed",
  "il2cpp_gc_free_fixed",
  "il2cpp_gchandle_new",
  "il2cpp_gchandle_new_weakref",
  "il2cpp_gchandle_get_target",
  "il2cpp_gchandle_foreach_get_target",
  "il2cpp_gc_wbarrier_set_field",
  "il2cpp_gc_has_strict_wbarriers",
  "il2cpp_gc_set_external_allocation_tracker",
  "il2cpp_gc_set_external_wbarrier_tracker",
  "il2cpp_gchandle_free",
  "il2cpp_object_header_size",
  "il2cpp_array_object_header_size",
  "il2cpp_offset_of_array_length_in_array_object_header",
  "il2cpp_offset_of_array_bounds_in_array_object_header",
  "il2cpp_allocation_granularity",
  "il2cpp_unity_liveness_allocate_struct",
  "il2cpp_unity_liveness_calculation_from_root",
  "il2cpp_unity_liveness_calculation_from_statics",
  "il2cpp_unity_liveness_finalize",
  "il2cpp_unity_liveness_free_struct",
  "il2cpp_method_get_return_type",
  "il2cpp_method_get_from_reflection",
  "il2cpp_method_get_object",
  "il2cpp_method_get_name",
  "il2cpp_method_is_generic",
  "il2cpp_method_is_inflated",
  "il2cpp_method_is_instance",
  "il2cpp_method_get_param_count",
  "il2cpp_method_get_param",
  "il2cpp_method_get_class",
  "il2cpp_method_has_attribute",
  "il2cpp_method_get_declaring_type",
  "il2cpp_method_get_flags",
  "il2cpp_method_get_token",
  "il2cpp_method_get_param_name",
  "il2cpp_profiler_install",
  "il2cpp_profiler_set_events",
  "il2cpp_profiler_install_enter_leave",
  "il2cpp_profiler_install_allocation",
  "il2cpp_profiler_install_gc",
  "il2cpp_profiler_install_fileio",
  "il2cpp_profiler_install_thread",
  "il2cpp_property_get_name",
  "il2cpp_property_get_get_method",
  "il2cpp_property_get_set_method",
  "il2cpp_property_get_parent",
  "il2cpp_property_get_flags",
  "il2cpp_object_get_class",
  "il2cpp_object_get_size",
  "il2cpp_object_get_virtual_method",
  "il2cpp_object_new",
  "il2cpp_object_unbox",
  "il2cpp_value_box",
  "il2cpp_monitor_enter",
  "il2cpp_monitor_try_enter",
  "il2cpp_monitor_exit",
  "il2cpp_monitor_pulse",
  "il2cpp_monitor_pulse_all",
  "il2cpp_monitor_wait",
  "il2cpp_monitor_try_wait",
  "il2cpp_runtime_invoke_convert_args",
  "il2cpp_runtime_invoke",
  "il2cpp_runtime_class_init",
  "il2cpp_runtime_object_init",
  "il2cpp_runtime_object_init_exception",
  "il2cpp_runtime_unhandled_exception_policy_set",
  "il2cpp_string_length",
  "il2cpp_string_chars",
  "il2cpp_string_new",
  "il2cpp_string_new_wrapper",
  "il2cpp_string_new_utf16",
  "il2cpp_string_new_len",
  "il2cpp_string_intern",
  "il2cpp_string_is_interned",
  "il2cpp_thread_current",
  "il2cpp_thread_attach",
  "il2cpp_thread_detach",
  "il2cpp_is_vm_thread",
  "il2cpp_current_thread_walk_frame_stack",
  "il2cpp_thread_walk_frame_stack",
  "il2cpp_current_thread_get_top_frame",
  "il2cpp_thread_get_top_frame",
  "il2cpp_current_thread_get_frame_at",
  "il2cpp_thread_get_frame_at",
  "il2cpp_current_thread_get_stack_depth",
  "il2cpp_thread_get_stack_depth",
  "il2cpp_set_default_thread_affinity",
  "il2cpp_override_stack_backtrace",
  "il2cpp_type_get_object",
  "il2cpp_type_get_type",
  "il2cpp_type_get_class_or_element_class",
  "il2cpp_type_get_name",
  "il2cpp_type_get_assembly_qualified_name",
  "il2cpp_type_get_reflection_name",
  "il2cpp_type_is_byref",
  "il2cpp_type_get_attrs",
  "il2cpp_type_equals",
  "il2cpp_type_is_static",
  "il2cpp_type_is_pointer_type",
  "il2cpp_image_get_assembly",
  "il2cpp_image_get_name",
  "il2cpp_image_get_filename",
  "il2cpp_image_get_entry_point",
  "il2cpp_image_get_class_count",
  "il2cpp_image_get_class",
  "il2cpp_capture_memory_snapshot",
  "il2cpp_free_captured_memory_snapshot",
  "il2cpp_set_find_plugin_callback",
  "il2cpp_register_log_callback",
  "il2cpp_debugger_set_agent_options",
  "il2cpp_is_debugger_attached",
  "il2cpp_register_debugger_agent_transport",
  "il2cpp_debug_foreach_method",
  "il2cpp_debug_get_method_info",
  "il2cpp_unity_install_unitytls_interface",
  "il2cpp_custom_attrs_from_class",
  "il2cpp_custom_attrs_from_method",
  "il2cpp_custom_attrs_from_field",
  "il2cpp_custom_attrs_has_attr",
  "il2cpp_custom_attrs_get_attr",
  "il2cpp_custom_attrs_construct",
  "il2cpp_custom_attrs_free",
  "il2cpp_type_get_name_chunked",
  "il2cpp_class_set_userdata",
  "il2cpp_class_get_userdata_offset",
  "il2cpp_class_for_each",
  "il2cpp_unity_set_android_network_up_state_func"
];
Il2Cpp.$config = Il2Cpp.$config || {};
Il2Cpp.$config.exports = {};
for (const api of IL2CPP_API_NAMES) {
  Il2Cpp.$config.exports[api] = () => Il2Cpp.module.findExportByName(api);
}
var thngtohook = "il2cpp_runtime_invoke_convert_args";
var flingForce = 5;
var flingEnabled = true;
var menuName = "Explodings cewl menu -- thank ya thatguyronin for da temp";
var menu = null;
var reference = null;
var referenceCollider = null;
var cachedClickClip = null;
var cachedClickSource = null;
var buttonClickDelay = 0;
var LerpMenu = false;
var righthand = false;
var deltaTime = 0;
var rgbColorEnabled = false;
var lastRgbApply = 0;
var outBoolBuf = null;
var lastClickScan = 0;
var cameraClassCache = null;
var longArmsOriginalLength = null;
var time = 0;
var flySpeed = 20;
var bgColor = [0.2, 0.15, 0.25, 0.85];
var textColor = [0.95, 0.85, 1, 1];
var buttonColor = [0.3, 0.2, 0.4, 0.8];
var buttonPressedColor = [0.5, 0.35, 0.65, 1];
var MENU_SCALE = 1.15;
var THEMES = [
  { name: "Dark", bg: [0.08, 0.08, 0.08, 0.98], text: [0.95, 0.95, 0.95, 1], button: [0.15, 0.15, 0.15, 1], buttonPressed: [0.3, 0.3, 0.3, 1], outline: [0.15, 0.15, 0.15, 1], pageOutline: [0.2, 0.2, 0.2, 1], buttonOutline: [0.2, 0.2, 0.2, 1] },
  { name: "Blue", bg: [0.05, 0.07, 0.12, 0.98], text: [0.9, 0.95, 1, 1], button: [0.1, 0.16, 0.28, 1], buttonPressed: [0.16, 0.28, 0.45, 1], outline: [0.12, 0.2, 0.35, 1], pageOutline: [0.15, 0.25, 0.4, 1], buttonOutline: [0.15, 0.25, 0.4, 1] },
  { name: "Red", bg: [0.12, 0.05, 0.05, 0.98], text: [1, 0.92, 0.92, 1], button: [0.28, 0.1, 0.1, 1], buttonPressed: [0.45, 0.15, 0.15, 1], outline: [0.35, 0.12, 0.12, 1], pageOutline: [0.4, 0.15, 0.15, 1], buttonOutline: [0.4, 0.15, 0.15, 1] },
  { name: "Green", bg: [0.05, 0.1, 0.06, 0.98], text: [0.92, 1, 0.93, 1], button: [0.1, 0.22, 0.12, 1], buttonPressed: [0.16, 0.35, 0.18, 1], outline: [0.12, 0.28, 0.15, 1], pageOutline: [0.15, 0.32, 0.18, 1], buttonOutline: [0.15, 0.32, 0.18, 1] }
];
var themeIndex = 0;
var menuOutlineColor = THEMES[0].outline;
var pageOutlineColor = THEMES[0].pageOutline;
var buttonOutlineColor = THEMES[0].buttonOutline;
function applyTheme() {
  const t = THEMES[themeIndex];
  bgColor = t.bg;
  textColor = t.text;
  buttonColor = t.button;
  buttonPressedColor = t.buttonPressed;
  menuOutlineColor = t.outline;
  pageOutlineColor = t.pageOutline;
  buttonOutlineColor = t.buttonOutline;
}
function applyThemeId(i) {
  themeIndex = i;
  applyTheme();
}
applyTheme();
var menuOutlineThickness = 9e-3 * MENU_SCALE;
var controlOutlineThickness = 75e-4 * MENU_SCALE;
var rowOutlineThickness = 65e-4 * MENU_SCALE;
var outlinesEnabled = true;
var rowButtonHeight = 0.06 * MENU_SCALE;
var rowButtonWidth = 0.61 * MENU_SCALE;
var rowButtonSpacing = 0.032 * MENU_SCALE;
var disconnectButtonWidth = 0.62 * MENU_SCALE;
var buttonsPerPage = 9;
var currentNotification = "";
var notifactionResetTime = 0;
var currentCategory = 0;
var currentPage = 0;
var frameCount = 0;
var menuCanvas = null;
var leftAxis = null;
var rightAxis = null;
var clickableButtons = [];
var outAxis = null;
function ensureOutAxis() {
  if (outAxis === null)
    outAxis = Il2Cpp.alloc(8);
  return outAxis;
}
var strobeEnabled = false;
var lastStrobeTime = 0;
var leftPrimary = false;
var leftSecondary = false;
var rightPrimary = false;
var rightSecondary = false;
var leftGrab = false;
var rightGrab = false;
var leftTrigger = false;
var rightTrigger = false;
var leftStick = false;
var rightStick = false;
var GunPointer = null;
var GunLine = null;
var gunColor = [0.6784, 0.498, 0.8549, 0.75];
var menuInitTime = 0;
function Hooks() {
  Il2Cpp.perform(() => {
    const images = {
      "AssemblyCSharp": Il2Cpp.domain.assembly("Assembly-CSharp").image,
      "UnityEngine.CoreModule": Il2Cpp.domain.assembly("UnityEngine.CoreModule").image,
      "UnityEngine.PhysicsModule": Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image,
      "UnityEngine.UIModule": Il2Cpp.domain.assembly("UnityEngine.UIModule").image,
      "UnityEngine.UI": Il2Cpp.domain.assembly("UnityEngine.UI").image,
      "UnityEngine.TextRenderingModule": Il2Cpp.domain.assembly("UnityEngine.TextRenderingModule").image,
      "Unity.TextMeshPro": Il2Cpp.domain.assembly("Unity.TextMeshPro").image,
      "UnityEngine.XRModule": Il2Cpp.domain.assembly("UnityEngine.XRModule").image,
      "UnityEngine.AudioModule": Il2Cpp.domain.assembly("UnityEngine.AudioModule").image,
      "UnityEngine.AssetBundleModule": Il2Cpp.domain.assembly("UnityEngine.AssetBundleModule").image,
      "PhotonUnityNetworking": Il2Cpp.domain.assembly("PhotonUnityNetworking").image,
      "PhotonVoice": (() => {
        try {
          return Il2Cpp.domain.assembly("PhotonVoice").image;
        } catch (e) {
          return null;
        }
      })(),
      "PhotonVoicePUN": (() => {
        try {
          return Il2Cpp.domain.assembly("PhotonVoicePUN").image;
        } catch (e) {
          try {
            return Il2Cpp.domain.assembly("PhotonVoice.PUN").image;
          } catch (e2) {
            return null;
          }
        }
      })()
    };
    const AssemblyCSharp = images["AssemblyCSharp"];
    const UnityEngineCore = images["UnityEngine.CoreModule"];
    const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    const UnityEngineUI = images["UnityEngine.UI"];
    const UnityEngineUIModule = images["UnityEngine.UIModule"];
    const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    const UnityTextMeshPro = images["Unity.TextMeshPro"];
    const UnityEngineXR = images["UnityEngine.XRModule"];
    const UnityEngineAudio = images["UnityEngine.AudioModule"];
    const PhotonUnityNetworking = images["PhotonUnityNetworking"];
    let AudioSourceClass = null;
    let AudioClipClass = null;
    try {
      if (UnityEngineAudio != null) {
        AudioSourceClass = UnityEngineAudio.class("UnityEngine.AudioSource");
        AudioClipClass = UnityEngineAudio.class("UnityEngine.AudioClip");
      }
    } catch (e) {
    }
    let RecorderClass = null;
    try {
      if (images["PhotonVoice"] != null)
        RecorderClass = images["PhotonVoice"].class("Photon.Voice.Unity.Recorder");
    } catch (e) {
    }
    let PhotonVoiceViewClass = null;
    try {
      if (images["PhotonVoicePUN"] != null)
        PhotonVoiceViewClass = images["PhotonVoicePUN"].class("Photon.Voice.PUN.PhotonVoiceView");
    } catch (e) {
    }
    let PunVoiceClientClass = null;
    try {
      if (images["PhotonVoicePUN"] != null)
        PunVoiceClientClass = images["PhotonVoicePUN"].class("Photon.Voice.PUN.PunVoiceClient");
    } catch (e) {
    }
    let VoiceConnectionClass = null;
    try {
      if (images["PhotonVoice"] != null)
        VoiceConnectionClass = images["PhotonVoice"].class("Photon.Voice.Unity.VoiceConnection");
    } catch (e) {
    }
    let SpeakerClass = null;
    try {
      if (images["PhotonVoice"] != null)
        SpeakerClass = images["PhotonVoice"].class("Photon.Voice.Unity.Speaker");
    } catch (e) {
    }
    const InputDevices = UnityEngineXR.class("UnityEngine.XR.InputDevices");
    const CommonUsages = UnityEngineXR.class("UnityEngine.XR.CommonUsages");
    const GameObject = UnityEngineCore.class("UnityEngine.GameObject");
    const Object = UnityEngineCore.class("UnityEngine.Object");
    const TransformClass = UnityEngineCore.class("UnityEngine.Transform");
    const Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
    const Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
    const Time = UnityEngineCore.class("UnityEngine.Time");
    const Resources = UnityEngineCore.class("UnityEngine.Resources");
    const Material = UnityEngineCore.class("UnityEngine.Material");
    const Renderer = UnityEngineCore.class("UnityEngine.Renderer");
    const Shader = UnityEngineCore.class("UnityEngine.Shader");
    const RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
    const LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
    const PhotonNetwork = PhotonUnityNetworking.class("Photon.Pun.PhotonNetwork");
    const classOf = (image, name) => {
      try {
        return image.class(name);
      } catch (_) {
        return null;
      }
    };
    const LARImage = (() => {
      try {
        return Il2Cpp.domain.assembly("LethalApe.Game").image;
      } catch (e) {
        return AssemblyCSharp;
      }
    })();
    const PlayerClass = classOf(LARImage, "LethalApeR.Locomotion.Player");
    const BaseButtonClass = classOf(LARImage, "LethalApeR.BaseButton");
    const ModsClass = classOf(LARImage, "Mods");
    const GorillaSimClass = classOf(AssemblyCSharp, "GorillaLocomotion.GorillaSim");
    const LARMenuClass = classOf(LARImage, "LethalApeR.LARMenu");
    const PhotonVRPlayerClass = classOf(LARImage, "LethalApeR.Networking.PhotonVRPlayer");
    const PVPPlayerClass = classOf(LARImage, "LethalApeR.PVPPlayer");
    const PhotonVRManagerClass = classOf(LARImage, "LethalApeR.Networking.PhotonVRManager");
    const AdminGunClass = classOf(LARImage, "LethalApeR.AdminGun");
    const ScrapSystemClass = classOf(LARImage, "LethalApeR.Scrap.ScrapSystem");
    const PVPManagerClass = classOf(LARImage, "LethalApeR.Gameplay.Pvp.PVPManager");
    const PlayFabManagerClass = classOf(LARImage, "LethalApeR.Backend.PlayFabManager");
    const WardrobeManagerClass = classOf(LARImage, "LethalApeR.Backend.WardrobeManager");
    const PlayerPrefsClass = (() => {
      try {
        return Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.PlayerPrefs");
      } catch (e) {
        return null;
      }
    })();
    let GTPlayer = null;
    let playerRigidBody = null;
    let cachedHookPlayerHandle = null;
    let leftHandTransform = null;
    let rightHandTransform = null;
    let headCollider = null;
    let bodyCollider = null;
    const BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
    const Collider = UnityEnginePhysics.class("UnityEngine.Collider");
    const Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
    const Physics = UnityEnginePhysics.class("UnityEngine.Physics");
    const MeshCollider = UnityEnginePhysics.class("UnityEngine.MeshCollider");
    const Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
    const CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
    const GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
    const Text = UnityEngineUI.class("UnityEngine.UI.Text");
    const Font = UnityEngineTextRendering.class("UnityEngine.Font");
    let UberShader = null;
    let TextShader = null;
    let zeroVector = null;
    let oneVector = null;
    let identityQuaternion = null;
    let arial = null;
    function Destroy(object) {
      Object.method("Destroy", 1).invoke(object);
    }
    function getComponent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("GetComponent").overload("System.Type").invoke(type.type.object);
    }
    function getComponentInParent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("GetComponentInParent").overload("System.Type").invoke(type.type.object);
    }
    function addComponent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("AddComponent").overload("System.Type").invoke(type.type.object);
    }
    function findObjectsOfType(type) {
      if (!type)
        return [];
      try {
        if (type.type)
          return Object.method("FindObjectsOfType").overload("System.Type").invoke(type.type.object);
      } catch (e) {
      }
      try {
        return Object.method("FindObjectsOfType").inflate(type).invoke();
      } catch (e) {
        return [];
      }
    }
    function findObjectOfType(type) {
      if (!type)
        return null;
      try {
        if (type.type)
          return Object.method("FindObjectOfType").overload("System.Type").invoke(type.type.object);
      } catch (e) {
      }
      try {
        return Object.method("FindObjectOfType").inflate(type).invoke();
      } catch (e) {
        return null;
      }
    }
    function getTransform(obj) {
      return obj.method("get_transform").invoke();
    }
    function playerIsLocal(player) {
      return player.method("get_IsMine").invoke();
    }
    function sendAllOutgoing() {
      PhotonNetwork.method("SendAllOutgoingCommands").invoke();
    }
    function vec3(x, y, z) {
      const temp = GameObject.method("CreatePrimitive").invoke(3);
      const t = temp.method("get_transform").invoke();
      t.method("set_position").invoke([x, y, z]);
      const pos = t.method("get_position").invoke();
      Object.method("Destroy", 1).invoke(temp);
      return pos;
    }
    function identityQ() {
      const temp = GameObject.method("CreatePrimitive").invoke(3);
      const q = temp.method("get_transform").invoke().method("get_rotation").invoke();
      Object.method("Destroy", 1).invoke(temp);
      return q;
    }
    function SetName(name) {
      try {
        PhotonNetwork.method("set_NickName").invoke(Il2Cpp.string(name));
      } catch (e) {
      }
      try {
        if (PhotonVRManagerClass != null)
          PhotonVRManagerClass.method("SetUsername").invoke(Il2Cpp.string(name));
      } catch (e) {
      }
    }
    function sendNotification(text = "", requiresReload = true, clearTime = 5) {
      const isOld = currentNotification == text;
      notifactionResetTime = time + clearTime;
      currentNotification = text;
      if (requiresReload && !isOld)
        reloadMenu();
    }
    function setupPanelMaterial(material, colorArr) {
      const setFloat = (name, value) => {
        try {
          material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string(name), value);
        } catch (_) {
        }
      };
      const setColor3 = (name, value) => {
        try {
          material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string(name), value);
        } catch (_) {
        }
      };
      setColor3("_BaseColor", colorArr);
      setColor3("_Color", colorArr);
      const emission = [colorArr[0] * 0.25, colorArr[1] * 0.25, colorArr[2] * 0.25, 1];
      setColor3("_EmissionColor", emission);
      try {
        material.method("EnableKeyword").invoke(Il2Cpp.string("_EMISSION"));
      } catch (_) {
      }
      try {
        material.method("SetOverrideTag").invoke(Il2Cpp.string("RenderType"), Il2Cpp.string("Opaque"));
      } catch (_) {
      }
      setFloat("_Surface", 0);
      setFloat("_ZWrite", 1);
      setFloat("_Cull", 0);
      setFloat("_Smoothness", 0);
      setFloat("_Glossiness", 0);
      setFloat("_Metallic", 0);
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_SURFACE_TYPE_TRANSPARENT"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHAPREMULTIPLY_ON"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHABLEND_ON"));
      } catch (_) {
      }
      try {
        material.method("set_renderQueue").invoke(2e3);
      } catch (_) {
      }
    }
    function setupOpaqueMaterial(material) {
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_ZWrite"), 1);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_ZTest"), 4);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_SrcBlend"), 1);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_DstBlend"), 0);
      } catch (_) {
      }
      try {
        material.method("SetOverrideTag").invoke(Il2Cpp.string("RenderType"), Il2Cpp.string("Opaque"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHABLEND_ON"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHAPREMULTIPLY_ON"));
      } catch (_) {
      }
      try {
        material.method("set_renderQueue").invoke(2e3);
      } catch (_) {
      }
    }
    function createOutlinedRoundedObject(pos, scale, fillColor, outlineColor, parent, interactive = false, outlineSize = 0.025) {
      const createLayer = (center, size, color, keepCollider) => {
        return createObject(center, identityQuaternion, size, 3, color, parent, keepCollider);
      };
      if (outlinesEnabled && outlineSize > 0) {
        createLayer([pos[0] - 1e-3, pos[1], pos[2]], [scale[0], scale[1] + outlineSize * 2, scale[2] + outlineSize * 2], outlineColor, false);
      }
      return createLayer(pos, scale, fillColor, interactive);
    }
    function createObject(pos = zeroVector, rot = identityQuaternion, scale = oneVector, primitiveType = 3, colorArr = [1, 1, 1, 1], parent = null, enableCollider = false) {
      const obj = GameObject.method("CreatePrimitive").invoke(primitiveType);
      const renderer = getComponent(obj, Renderer);
      if (colorArr[3] == 0) {
        renderer.method("set_enabled").invoke(false);
      } else {
        const material = renderer.method("get_material").invoke();
        material.method("set_shader").invoke(UberShader);
        material.method("set_color").invoke(colorArr);
        try {
          setupPanelMaterial(material, colorArr);
        } catch (_) {
          try {
            setupOpaqueMaterial(material);
          } catch (_2) {
          }
        }
      }
      const col = getComponent(obj, Collider);
      if (!col.isNull()) {
        if (enableCollider) {
          col.method("set_enabled").invoke(true);
          col.method("set_isTrigger").invoke(true);
        } else {
          Object.method("Destroy", 1).invoke(col);
        }
      }
      const transform = getTransform(obj);
      if (parent != null)
        transform.method("SetParent", 2).invoke(parent, false);
      transform.method("set_position").invoke(pos);
      transform.method("set_rotation").invoke(rot);
      transform.method("set_localScale").invoke(scale);
      return obj;
    }
    function renderMenuText(canvasObject, text = "", color = [1, 1, 1, 1], pos = zeroVector, size = oneVector) {
      const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
      title.method("set_text").invoke(Il2Cpp.string(text));
      title.method("set_font").invoke(arial);
      title.method("set_fontSize").invoke(1);
      title.method("set_color").invoke(color);
      title.method("set_fontStyle").invoke(3);
      title.method("set_alignment").invoke(4);
      title.method("set_resizeTextForBestFit").invoke(true);
      title.method("set_resizeTextMinSize").invoke(0);
      try {
        title.method("set_resizeTextMaxSize").invoke(16.8);
      } catch (_) {
      }
      const rectTransform = getComponent(title, RectTransform);
      rectTransform.method("set_sizeDelta").invoke(size);
      rectTransform.method("set_position").invoke(pos);
      rectTransform.method("set_rotation").invoke(Quaternion.method("Euler").invoke(180, 90, 90));
    }
    function updateButtonColor(button, buttonData) {
      const RendererClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Renderer");
      const renderer = getComponent(button, RendererClass);
      if (!renderer)
        return;
      const material = renderer.method("get_material").invoke();
      const c = buttonData.enabled ? buttonPressedColor : buttonColor;
      try {
        material.method("set_color").invoke(c);
      } catch (_) {
      }
      try {
        material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string("_BaseColor"), c);
      } catch (_) {
      }
      try {
        material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string("_EmissionColor"), [c[0] * 0.25, c[1] * 0.25, c[2] * 0.25, 1]);
      } catch (_) {
      }
    }
    function reloadMenu() {
      if (menu != null) {
        Object.method("Destroy", 1).invoke(menu);
        menu = null;
      }
    }
    let gunLocked = false;
    let lockTarget = null;
    let gunRenderedLastFrame = false;
    function renderMenu() {
      try {
        menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
        Destroy(getComponent(menu, BoxCollider));
        try {
          menu.method("set_layer").invoke(31);
        } catch (_) {
        }
        const S = MENU_SCALE;
        const panelScaleZ = 0.76 * S;
        const panelCenterZ = -0.03 * S;
        const pageCenterZ = -0.045 * S;
        createOutlinedRoundedObject([0.1 * S, 0, panelCenterZ], [0.1 * S, 0.72 * S, panelScaleZ], bgColor, menuOutlineColor, getTransform(menu), false, menuOutlineThickness);
        try {
          const CameraClass2 = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          const cameras = Object.method("FindObjectsOfType").overload("System.Type").invoke(CameraClass2.type.object);
          for (let ci = 0; ci < cameras.length; ci++) {
            try {
              const cam = cameras.get(ci);
              const maskBefore = cam.method("get_cullingMask").invoke();
              if ((maskBefore & 1 << 31) === 0)
                cam.method("set_cullingMask").invoke(maskBefore | 1 << 31);
            } catch (_) {
            }
          }
        } catch (_) {
        }
        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        const canvas = addComponent(canvasObject, Canvas);
        Destroy(getComponent(canvasObject, BoxCollider));
        const canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        canvas.method("set_sortingOrder").invoke(32767);
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1e3);
        menuCanvas = canvas;
        try {
          const CameraClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          let mainCam = CameraClass.method("get_main").invoke();
          if (!mainCam || mainCam.isNull()) {
            const sz = CameraClass.method("get_allCamerasCount").invoke();
            if (sz > 0) {
              const camArr = CameraClass.method("GetAllCameras", 1).invoke([]);
              for (let ci = 0; ci < sz; ci++) {
                const c = camArr.get(ci);
                if (c && !c.isNull() && c.method("get_isActiveAndEnabled").invoke()) {
                  mainCam = c;
                  break;
                }
              }
            }
          }
          if (mainCam && !mainCam.isNull())
            canvas.method("set_worldCamera").invoke(mainCam);
        } catch (_) {
        }
        renderMenuText(canvasObject, menuName + ` [${currentPage + 1}]`, textColor, [0.11 * S, 0, 0.103 * S], [0.7 * S, 0.06 * S]);
        if (time > notifactionResetTime)
          currentNotification = "";
        renderMenuText(canvasObject, currentNotification.length > 0 ? "[" + currentNotification + "]" : "", textColor, [0.11 * S, 0, 0.225 * S], [0.7 * S, 0.045 * S]);
        const homeZ = 0.205 * S;
        clickableButtons = [];
        {
          const homeButton = createOutlinedRoundedObject([0.1 * S, 0, homeZ], [0.09 * S, disconnectButtonWidth, 0.065 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          homeButton.method("set_name").invoke(Il2Cpp.string("@GlobalReturn"));
          addComponent(homeButton, BaseButtonClass);
          if (AudioSourceClass != null) {
            try {
              addComponent(homeButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(homeButton, Collider).method("set_isTrigger").invoke(true);
          clickableButtons.push({ name: "GlobalReturn", collider: getComponent(homeButton, Collider), go: homeButton });
          renderMenuText(canvasObject, "home page", textColor, [0.11 * S, 0, homeZ], [0.7 * S, 0.05 * S]);
        }
        {
          const pageButton = createOutlinedRoundedObject([0.1 * S, 0.14 * S, pageCenterZ], [0.09 * S, 0.135 * S, 0.64 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));
          addComponent(pageButton, BaseButtonClass);
          if (AudioSourceClass != null) {
            try {
              addComponent(pageButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(pageButton, Collider).method("set_isTrigger").invoke(true);
          clickableButtons.push({ name: "PreviousPage", collider: getComponent(pageButton, Collider), go: pageButton });
          renderMenuText(canvasObject, "<", textColor, [0.11 * S, 0.14 * S, pageCenterZ], [0.25 * S, 0.075 * S]);
        }
        {
          const pageButton = createOutlinedRoundedObject([0.1 * S, -0.14 * S, pageCenterZ], [0.09 * S, 0.135 * S, 0.64 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));
          addComponent(pageButton, BaseButtonClass);
          if (AudioSourceClass != null) {
            try {
              addComponent(pageButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(pageButton, Collider).method("set_isTrigger").invoke(true);
          clickableButtons.push({ name: "NextPage", collider: getComponent(pageButton, Collider), go: pageButton });
          renderMenuText(canvasObject, ">", textColor, [0.11 * S, -0.14 * S, pageCenterZ], [0.25 * S, 0.075 * S]);
        }
        const maxCurrentPage = Math.max(Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1, 0);
        if (currentPage > maxCurrentPage)
          currentPage = maxCurrentPage;
        const targetMods = buttons[currentCategory].slice(currentPage * buttonsPerPage).slice(0, buttonsPerPage);
        const rowStartZ = 0.075 * S;
        let i = 0;
        targetMods.forEach((buttonData) => {
          const rowZ = rowStartZ - i * rowButtonSpacing;
          const button = createOutlinedRoundedObject([0.105 * S, 0, rowZ], [0.09 * S, rowButtonWidth, rowButtonHeight], buttonData.enabled ? buttonPressedColor : buttonColor, buttonOutlineColor, getTransform(menu), true, rowOutlineThickness);
          button.method("set_name").invoke(Il2Cpp.string("@" + buttonData.buttonText));
          addComponent(button, BaseButtonClass);
          if (AudioSourceClass != null) {
            try {
              addComponent(button, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(button, Collider).method("set_isTrigger").invoke(true);
          clickableButtons.push({ name: buttonData.buttonText, collider: getComponent(button, Collider), go: button });
          renderMenuText(canvasObject, (buttonData.enabled ? "[+] " : "") + buttonData.buttonText, textColor, [0.11 * S, 0, rowZ], [0.8 * S, 0.05 * S]);
          updateButtonColor(button, buttonData);
          i++;
        });
      } catch (e) {
      }
    }
    function renderReference() {
      if (righthand) {
        reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, leftHandTransform, true);
      } else {
        reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform, true);
      }
      referenceCollider = getComponent(reference, Collider);
      getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
      reference.method("set_layer").invoke(2);
      addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
    }
    function renderGun(overrideLayerMask = null) {
      gunRenderedLastFrame = true;
      const StartPosition = leftHandTransform.method("get_position").invoke();
      const Direction = leftHandTransform.method("get_forward").invoke();
      const DirectionDivided = Vector3.method("op_Division").invoke(Direction, 4);
      const rayStartPosition = Vector3.method("op_Addition").invoke(StartPosition, DirectionDivided);
      const layerMask = overrideLayerMask || -3180559;
      const hits = Physics.method("RaycastAll", 4).invoke(rayStartPosition, Direction, 512, layerMask);
      let finalDistance = Infinity;
      let finalRay = null;
      for (const hit of hits) {
        const distance = Vector3.method("Distance").invoke(hit.method("get_point").invoke(), StartPosition);
        if (distance < finalDistance) {
          finalRay = hit;
          finalDistance = distance;
        }
      }
      let EndPosition;
      if (gunLocked) {
        EndPosition = getTransform(lockTarget).method("get_position").invoke();
      } else if (finalRay != null && !finalRay.isNull()) {
        EndPosition = finalRay.method("get_point").invoke();
      } else {
        const farDirection = Vector3.method("op_Multiply").invoke(Direction, 512);
        EndPosition = Vector3.method("op_Addition").invoke(StartPosition, farDirection);
      }
      if (Vector3.method("op_Equality").invoke(EndPosition, zeroVector)) {
        const farDirection = Vector3.method("op_Multiply").invoke(Direction, 512);
        EndPosition = Vector3.method("op_Addition").invoke(StartPosition, farDirection);
      }
      if (GunPointer == null) {
        GunPointer = createObject(EndPosition, identityQuaternion, [0.1, 0.1, 0.1], 0, [1, 1, 1, 1]);
      }
      GunPointer.method("SetActive").invoke(true);
      const pointerTransform = getTransform(GunPointer);
      pointerTransform.method("set_position").invoke(EndPosition);
      const PointerRenderer = getComponent(GunPointer, Renderer);
      const material = PointerRenderer.method("get_material").invoke();
      material.method("set_shader").invoke(TextShader);
      const pointerColor = gunLocked || leftTrigger ? buttonPressedColor : gunColor;
      material.method("set_color").invoke(pointerColor);
      const collider = getComponent(GunPointer, Collider);
      if (collider != null) {
        Destroy(collider);
      }
      if (GunLine == null) {
        const lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
        GunLine = addComponent(lineObj, LineRenderer);
      } else {
        GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
      }
      const lineMaterial = GunLine.method("get_material").invoke();
      lineMaterial.method("set_shader").invoke(TextShader);
      GunLine.method("set_startColor").invoke(bgColor);
      GunLine.method("set_endColor").invoke(bgColor);
      const lineWidth = 0.025;
      GunLine.method("set_startWidth").invoke(lineWidth);
      GunLine.method("set_endWidth").invoke(lineWidth);
      GunLine.method("set_positionCount").invoke(2);
      GunLine.method("set_useWorldSpace").invoke(true);
      GunLine.method("SetPosition").invoke(0, StartPosition);
      GunLine.method("SetPosition").invoke(1, EndPosition);
      if (leftTrigger || gunLocked) {
        const Step = 10;
        GunLine.method("set_positionCount").invoke(Step);
        GunLine.method("SetPosition").invoke(0, StartPosition);
        for (let i = 1; i < Step - 1; i++) {
          const t = i / (Step - 1);
          const Position = Vector3.method("Lerp").invoke(StartPosition, EndPosition, t);
          const randomValue = Math.random();
          let offset = zeroVector;
          if (randomValue > 0.75) {
            offset = [
              Math.random() * 0.2 - 0.1,
              Math.random() * 0.2 - 0.1,
              Math.random() * 0.2 - 0.1
            ];
          }
          const finalPosition = Vector3.method("op_Addition").invoke(Position, offset);
          GunLine.method("SetPosition").invoke(i, finalPosition);
        }
        GunLine.method("SetPosition").invoke(Step - 1, EndPosition);
      }
      return { ray: finalRay, gunPointer: GunPointer };
    }
    function recenterMenu() {
      const menuTransform = getTransform(menu);
      let targetPos, targetRot;
      if (righthand) {
        targetPos = rightHandTransform.method("get_position").invoke();
        targetRot = rightHandTransform.method("get_rotation").invoke();
        targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, 0, 180));
      } else {
        targetPos = leftHandTransform.method("get_position").invoke();
        targetRot = leftHandTransform.method("get_rotation").invoke();
      }
      if (LerpMenu) {
        const menuPos = menuTransform.method("get_position").invoke();
        const distance = Vector3.method("Distance").invoke(menuPos, zeroVector);
        if (distance < 1) {
          menuTransform.method("set_position").invoke(targetPos);
          menuTransform.method("set_rotation").invoke(targetRot);
        } else {
          menuTransform.method("set_position").invoke(Vector3.method("Lerp").invoke(menuPos, targetPos, deltaTime * 15));
          menuTransform.method("set_rotation").invoke(Quaternion.method("Slerp").invoke(menuTransform.method("get_rotation").invoke(), targetRot, deltaTime * 15));
        }
      } else {
        menuTransform.method("set_position").invoke(targetPos);
        menuTransform.method("set_rotation").invoke(targetRot);
      }
    }
    class ButtonInfo {
      buttonText;
      method;
      enableMethod;
      disableMethod;
      isTogglable;
      toolTip;
      enabled;
      constructor(config) {
        this.buttonText = config.buttonText;
        this.method = config.method;
        this.enableMethod = config.enableMethod;
        this.disableMethod = config.disableMethod;
        this.isTogglable = config.isTogglable ?? true;
        this.toolTip = config.toolTip ?? null;
        this.enabled = config.enabled ?? false;
      }
    }
    const buttons = [
      [
        new ButtonInfo({
          buttonText: "Settings",
          method: () => {
            currentCategory = 2;
            currentPage = 0;
          },
          isTogglable: false
        })
      ],
      [
        new ButtonInfo({
          buttonText: "PreviousPage",
          method: () => {
            const lastPage = Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1;
            currentPage--;
            if (currentPage < 0)
              currentPage = lastPage;
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "NextPage",
          method: () => {
            const lastPage = Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1;
            currentPage++;
            currentPage %= lastPage + 1;
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "GlobalReturn",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
          },
          isTogglable: false
        })
      ],
      [
        new ButtonInfo({
          buttonText: "Exit Settings",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "dump game (fixed 0x86)",
          method: () => {
            dumpIl2CppAll();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "dump photon views (fixed 0x86)",
          method: () => {
            dumpPhotonPrefabs();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Rejoin",
          method: () => {
            rejoinRoom();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Disconnect",
          method: () => {
            disconnectRoom();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Join random",
          method: () => {
            joinRandomRoom();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "dump all audios (dev shi)",
          method: () => {
            dumpAllAudioWavs();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Dark",
          isTogglable: false,
          method: () => {
            applyThemeId(0);
            reloadMenu();
          }
        }),
        new ButtonInfo({
          buttonText: "Blue",
          isTogglable: false,
          method: () => {
            applyThemeId(1);
            reloadMenu();
          }
        }),
        new ButtonInfo({
          buttonText: "Red",
          isTogglable: false,
          method: () => {
            applyThemeId(2);
            reloadMenu();
          }
        }),
        new ButtonInfo({
          buttonText: "Green",
          isTogglable: false,
          method: () => {
            applyThemeId(3);
            reloadMenu();
          }
        })
      ]
    ];
    let buttonMap = /* @__PURE__ */ new Map();
    buttons.flat().forEach((button) => {
      buttonMap.set(button.buttonText, button);
    });
    function getIndex(buttonText) {
      return buttonMap.get(buttonText);
    }
    function rebuildButtonMap() {
      buttonMap = /* @__PURE__ */ new Map();
      buttons.flat().forEach((button) => {
        if (button)
          buttonMap.set(button.buttonText, button);
      });
    }
    function hideGun() {
      try {
        if (GunPointer != null)
          GunPointer.method("SetActive").invoke(false);
      } catch (e) {
      }
      try {
        const lineObj = GunLine.method("get_gameObject").invoke();
        if (lineObj != null && !lineObj.isNull())
          lineObj.method("SetActive").invoke(false);
      } catch (e) {
      }
    }
    const PhotonView = classOf(PhotonUnityNetworking, "Photon.Pun.PhotonView");
    let cachedLarMenu = null;
    let lastLarMenuFind = 0;
    function getLarMenu() {
      try {
        const now = Date.now();
        if (cachedLarMenu == null || cachedLarMenu.isNull() || now - lastLarMenuFind > 2e3) {
          lastLarMenuFind = now;
          cachedLarMenu = null;
          if (LARMenuClass != null) {
            const arr = findObjectsOfType(LARMenuClass);
            for (let i = 0; i < arr.length; i++) {
              try {
                const inst = arr.get(i);
                if (inst != null && !inst.isNull()) {
                  cachedLarMenu = inst;
                  break;
                }
              } catch (e) {
              }
            }
          }
        }
      } catch (e) {
      }
      return cachedLarMenu;
    }
    let cachedMods = null;
    let lastModsFind = 0;
    function getMods() {
      try {
        const now = Date.now();
        if (cachedMods == null || cachedMods.isNull() || now - lastModsFind > 2e3) {
          lastModsFind = now;
          cachedMods = null;
          if (ModsClass != null) {
            const arr = findObjectsOfType(ModsClass);
            for (let i = 0; i < arr.length; i++) {
              try {
                const inst = arr.get(i);
                if (inst != null && !inst.isNull()) {
                  cachedMods = inst;
                  break;
                }
              } catch (e) {
              }
            }
          }
        }
      } catch (e) {
      }
      return cachedMods;
    }
    let cachedManager = null;
    let lastManagerFind = 0;
    function getVrManager() {
      try {
        const now = Date.now();
        if (cachedManager == null || cachedManager.isNull() || now - lastManagerFind > 2e3) {
          lastManagerFind = now;
          cachedManager = null;
          if (PhotonVRManagerClass != null) {
            try {
              cachedManager = PhotonVRManagerClass.method("get_Manager").invoke();
            } catch (e) {
            }
          }
        }
      } catch (e) {
      }
      return cachedManager;
    }
    const localActorNumber = () => {
      try {
        return PhotonNetwork.method("get_LocalPlayer").invoke().method("get_ActorNumber").invoke();
      } catch (e) {
        return -1;
      }
    };
    function getPlayerList() {
      try {
        const mgr = getVrManager();
        if (mgr == null || mgr.isNull())
          return null;
        const list = mgr.field("players").value;
        if (list == null || list.isNull())
          return null;
        return list;
      } catch (e) {
        return null;
      }
    }
    function getLocalPhotonVRPlayer() {
      try {
        const mgr = getVrManager();
        if (mgr == null || mgr.isNull())
          return null;
        const lp = mgr.field("LocalPlayer").value;
        if (lp != null && !lp.isNull())
          return lp;
      } catch (e) {
      }
      return null;
    }
    function getLocalPVPPlayer() {
      try {
        if (PVPPlayerClass == null)
          return null;
        const arr = findObjectsOfType(PVPPlayerClass);
        for (let i = 0; i < arr.length; i++) {
          try {
            const p = arr.get(i);
            const pv = p.method("get_photonView").invoke();
            if (pv != null && !pv.isNull()) {
              try {
                if (pv.method("get_IsMine").invoke())
                  return p;
              } catch (e) {
              }
            }
          } catch (e) {
          }
        }
        if (arr.length > 0) {
          try {
            return arr.get(0);
          } catch (e) {
          }
        }
      } catch (e) {
      }
      return null;
    }
    function getPvpOf(p) {
      try {
        if (PVPPlayerClass == null)
          return null;
        const go = p.method("get_gameObject").invoke();
        if (go == null || go.isNull())
          return null;
        return go.method("GetComponent", 1).inflate(PVPPlayerClass).invoke();
      } catch (e) {
        return null;
      }
    }
    function pvpRPC(pv, name, target, args) {
      try {
        if (pv == null || pv.isNull())
          return false;
        pv.method("RPC", 3).invoke(Il2Cpp.string(name), target, args);
        return true;
      } catch (e) {
        return false;
      }
    }
    function forEachOtherPlayer(fn) {
      Il2Cpp.perform(() => {
        try {
          const list = getPlayerList();
          if (list == null)
            return;
          const local = getLocalPhotonVRPlayer();
          const count = list.method("get_Count").invoke();
          for (let i = 0; i < count; i++) {
            try {
              const p = list.method("get_Item").invoke(i);
              if (p == null || p.isNull())
                continue;
              let isLocal = false;
              if (local != null && !local.isNull()) {
                try {
                  if (local.handle.equals(p.handle))
                    isLocal = true;
                } catch (e) {
                }
              }
              fn(p, isLocal);
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    let lastKickAllTime = 0;
    function kickAllPlayers() {
      const now = Date.now();
      if (now - lastKickAllTime < 1e4) {
        sendNotification("Kick all on cooldown (10s)", false, 2);
        return;
      }
      lastKickAllTime = now;
      console.log("[net] kickAll fired at " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
      forEachOtherPlayer((p) => {
        try {
          const pv = p.method("get_photonView").invoke();
          if (pv == null || pv.isNull())
            return;
          pvpRPC(pv, "KickPlayer", 1, []);
          try {
            const owner = pv.method("get_Owner").invoke();
            if (owner != null && !owner.isNull()) {
              pv.method("RPC", 3).overload("System.String", "Photon.Realtime.Player", "System.Object[]").invoke(Il2Cpp.string("KickPlayer"), owner, []);
            }
          } catch (e) {
          }
          try {
            pvpRPC(pv, "KickPlayer", 2, []);
          } catch (e) {
          }
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Kicking everyone...", false, 2);
    }
    function teleportAllPlayers() {
      console.log("[net] teleportAll at " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
      Il2Cpp.perform(() => {
        try {
          let pos = null;
          try {
            pos = rightHandTransform.method("get_position").invoke();
          } catch (e) {
          }
          if (pos == null) {
            try {
              pos = GTPlayer.method("get_PlayerRigidBody").invoke().method("get_position").invoke();
            } catch (e) {
            }
          }
          if (pos == null)
            return;
          const x = pos.field("x").value;
          const y = pos.field("y").value;
          const z = pos.field("z").value;
          let tp = null;
          try {
            tp = Vector3.method(".ctor").invoke(x, y, z);
          } catch (e) {
          }
          if (tp == null) {
            try {
              tp = vec3(x, y, z);
            } catch (e) {
            }
          }
          forEachOtherPlayer((p) => {
            try {
              const pv = p.method("get_photonView").invoke();
              pvpRPC(pv, "RPC_Teleport", 1, [tp]);
            } catch (e) {
            }
          });
          sendAllOutgoing();
          sendNotification("Teleported everyone to you", false, 2);
        } catch (e) {
        }
      });
    }
    function flingAllPlayers() {
      Il2Cpp.perform(() => {
        try {
          let myPos = null;
          try {
            myPos = GTPlayer.method("get_PlayerRigidBody").invoke().method("get_position").invoke();
          } catch (e) {
          }
          if (myPos == null) {
            try {
              myPos = rightHandTransform.method("get_position").invoke();
            } catch (e) {
            }
          }
          if (myPos == null)
            return;
          const mx = myPos.field("x").value, my = myPos.field("y").value, mz = myPos.field("z").value;
          const up = Vector3.field("upVector").value;
          forEachOtherPlayer((p) => {
            try {
              const head = p.field("Head").value;
              const tp = head.method("get_position").invoke();
              const dx = tp.field("x").value - mx;
              const dy = tp.field("y").value - my;
              const dz = tp.field("z").value - mz;
              let len = Math.sqrt(dx * dx + dy * dy + dz * dz);
              if (len < 1e-3)
                len = 1;
              let dir = null;
              try {
                dir = Vector3.method(".ctor").invoke(dx / len, dy / len + 0.6, dz / len);
              } catch (e) {
              }
              if (dir == null) {
                try {
                  dir = vec3(dx / len, dy / len + 0.6, dz / len);
                } catch (e) {
                }
              }
              const pv = p.method("get_photonView").invoke();
              pvpRPC(pv, "RPC_ThrowPlayer", 1, [dir]);
            } catch (e) {
            }
          });
          sendAllOutgoing();
          sendNotification("Flinged everyone", false, 2);
        } catch (e) {
        }
      });
    }
    function killAllPlayers() {
      forEachOtherPlayer((p) => {
        try {
          const pvp = getPvpOf(p);
          if (pvp != null && !pvp.isNull()) {
            try {
              pvp.method("RPC_DamagePlayer").invoke(100);
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Killed everyone", false, 2);
    }
    function healAllPlayers() {
      forEachOtherPlayer((p) => {
        try {
          const pvp = getPvpOf(p);
          if (pvp != null && !pvp.isNull()) {
            try {
              pvp.method("RPC_HealPlayer").invoke(100);
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Healed everyone", false, 2);
    }
    function breakLimbsAll() {
      forEachOtherPlayer((p) => {
        try {
          const pv = p.method("get_photonView").invoke();
          pvpRPC(pv, "RPC_BreakLimb", 1, [1]);
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Broke everyone's limbs", false, 2);
    }
    function restoreLimbsAll() {
      forEachOtherPlayer((p) => {
        try {
          const pv = p.method("get_photonView").invoke();
          pvpRPC(pv, "RPC_RestoreLimbs", 1, []);
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Restored everyone's limbs", false, 2);
    }
    function muteAll(mute) {
      forEachOtherPlayer((p) => {
        try {
          p.method("set_IsMuted").invoke(mute);
        } catch (e) {
        }
      });
      sendNotification(mute ? "Muted everyone" : "Unmuted everyone", false, 2);
    }
    function nametagAll(hide) {
      forEachOtherPlayer((p) => {
        try {
          p.method("set_DisableNametag").invoke(hide);
        } catch (e) {
        }
      });
      sendNotification(hide ? "Nametags hidden" : "Nametags shown", false, 2);
    }
    function grabAll(grab) {
      Il2Cpp.perform(() => {
        try {
          const la = localActorNumber();
          forEachOtherPlayer((p) => {
            try {
              const pv = p.method("get_photonView").invoke();
              if (grab)
                pvpRPC(pv, "RPC_GrabPlayer", 1, [la, false]);
              else
                pvpRPC(pv, "RPC_ReleasePlayer", 1, []);
            } catch (e) {
            }
          });
          sendAllOutgoing();
          sendNotification(grab ? "Grabbed everyone" : "Released everyone", false, 2);
        } catch (e) {
        }
      });
    }
    let godModeEnabled = false;
    function setGodMode(on) {
      godModeEnabled = on;
      sendNotification(on ? "GodMode ON (damage blocked)" : "GodMode OFF", false, 2);
    }
    function modsToggle(methodName, fieldName, on) {
      Il2Cpp.perform(() => {
        try {
          const m = getMods();
          if (m == null || m.isNull()) {
            sendNotification("Mods instance not found", false, 2);
            return;
          }
          const want = on;
          if (fieldName != null) {
            try {
              const cur = m.field(fieldName).value;
              if (cur !== want)
                m.method(methodName).invoke();
            } catch (e) {
              try {
                m.method(methodName).invoke();
              } catch (e2) {
              }
            }
          } else {
            try {
              m.method(methodName).invoke();
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function modsDisableAll() {
      Il2Cpp.perform(() => {
        try {
          const m = getMods();
          if (m == null || m.isNull())
            return;
          m.method("DisableAllMods").invoke();
          sendNotification("All mods disabled", false, 2);
        } catch (e) {
        }
      });
    }
    function modsSize(positive) {
      Il2Cpp.perform(() => {
        try {
          const m = getMods();
          if (m == null || m.isNull()) {
            sendNotification("Mods instance not found", false, 2);
            return;
          }
          m.method("IncreaseSize").invoke(positive);
        } catch (e) {
        }
      });
    }
    function setLarFloat(fieldName, value, handler) {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull()) {
            sendNotification("LARMenu not found", false, 2);
            return;
          }
          l.field(fieldName).value = value;
          if (handler != null) {
            try {
              l.method(handler).invoke();
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    let espOn = false;
    let spamSpawnOn = false;
    let agFunnelOn = false;
    let invisibleOn = false;
    let prioritySpeakerOn = false;
    let autoLoudnessOn = false;
    let lastEspApply = 0;
    let lastFunnelApply = 0;
    let spamSpawnMethod = null;
    let agFunnelMethod = null;
    let espMethod = null;
    function setLarFlag(flagName, on) {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull()) {
            sendNotification("LARMenu not found", false, 2);
            return;
          }
          let fieldName = "_boxEsp";
          let handler = "Handle_Visuals";
          if (flagName === "spamSpawn") {
            fieldName = "_spamSpawning";
            handler = "Handle_SpamSpawn";
          } else if (flagName === "agFunnel") {
            fieldName = "_agFunnel";
            handler = "Handle_AgFunnel";
          } else if (flagName === "invisible") {
            fieldName = "_useInvisible";
            handler = "Handle_Local";
          } else if (flagName === "prioritySpeaker") {
            fieldName = "_isPrioritySpeaker";
            handler = "Handle_Local";
          } else if (flagName === "autoLoudness") {
            fieldName = "_autoLoudness";
            handler = "Handle_Local";
          }
          try {
            l.field(fieldName).value = on;
          } catch (e) {
          }
          try {
            l.method(handler).invoke();
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    function healSelf() {
      Il2Cpp.perform(() => {
        try {
          const pvp = getLocalPVPPlayer();
          if (pvp == null) {
            sendNotification("No PVPPlayer found", false, 2);
            return;
          }
          try {
            pvp.method("Heal").invoke(100);
          } catch (e) {
          }
          try {
            pvp.method("set_CurrentHealth").invoke(100);
          } catch (e) {
          }
          sendNotification("Healed!", false, 2);
        } catch (e) {
        }
      });
    }
    function maxCredits() {
      Il2Cpp.perform(() => {
        try {
          const amt = 999999999;
          let done = false;
          if (ScrapSystemClass != null) {
            const systems = findObjectsOfType(ScrapSystemClass);
            for (let i = 0; i < systems.length; i++) {
              try {
                const s = systems.get(i);
                try {
                  s.field("_totalCredits").value = amt;
                } catch (e) {
                }
                done = true;
              } catch (e) {
              }
            }
          }
          if (PlayerPrefsClass != null) {
            try {
              PlayerPrefsClass.method("SetInt").invoke(Il2Cpp.string("TOTAL_CREDITS"), amt);
            } catch (e) {
            }
            try {
              PlayerPrefsClass.method("Save").invoke();
            } catch (e) {
            }
          }
          try {
            if (PlayFabManagerClass != null) {
              const pfm = PlayFabManagerClass.method("get_Instance").invoke();
              if (pfm != null && !pfm.isNull())
                pfm.method("UpdateCurrencyBoard").invoke(amt);
            }
          } catch (e) {
          }
          sendNotification(done ? "Credits maxed!" : "No scrap system (prefs still set)", false, 2);
        } catch (e) {
        }
      });
    }
    function giveEveryoneCredits() {
      Il2Cpp.perform(() => {
        try {
          if (ScrapSystemClass == null)
            return;
          const systems = findObjectsOfType(ScrapSystemClass);
          for (let i = 0; i < systems.length; i++) {
            try {
              const s = systems.get(i);
              const pv = s.method("get_photonView").invoke();
              if (pv != null && !pv.isNull())
                pv.method("RPC", 3).invoke(Il2Cpp.string("RPC_DistributeCredits"), 1, [999999]);
            } catch (e) {
            }
          }
          sendAllOutgoing();
          sendNotification("Distributed credits to everyone", false, 2);
        } catch (e) {
        }
      });
    }
    function setAdminGunExplosive(on) {
      Il2Cpp.perform(() => {
        try {
          if (AdminGunClass == null)
            return;
          const guns = findObjectsOfType(AdminGunClass);
          for (let i = 0; i < guns.length; i++) {
            try {
              guns.get(i).field("useExplosiveRounds").value = on;
            } catch (e) {
            }
          }
          sendNotification(on ? "Explosive rounds ON" : "Explosive rounds OFF", false, 2);
        } catch (e) {
        }
      });
    }
    let foundDoors = {};
    function findDoorObject(fieldName) {
      const needle = fieldName.toLowerCase().replace("door", "").trim();
      let door = null;
      try {
        const pfm = PlayFabManagerClass.method("get_Instance").invoke();
        if (pfm != null && !pfm.isNull()) {
          const d = pfm.field(fieldName).value;
          if (d != null && !d.isNull())
            door = d;
        }
      } catch (e) {
        console.log("[doorDebug] field lookup error: " + e);
      }
      if (door != null && !door.isNull())
        return door;
      let scanned = 0;
      let fallback = null;
      const matches = [];
      try {
        const all = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(GameObject.type.object, true);
        if (all != null) {
          for (let i = 0; i < all.length; i++) {
            try {
              const g = all.get(i);
              if (g == null || g.isNull())
                continue;
              scanned++;
              const n = g.method("get_name").invoke().toString().toLowerCase();
              let pn = "";
              try {
                const t = g.method("get_transform").invoke();
                const parent = t.method("get_parent").invoke();
                if (parent != null && !parent.isNull())
                  pn = parent.method("get_name").invoke().toString().toLowerCase();
              } catch (e2) {
              }
              if (n.indexOf(needle) === -1 && pn.indexOf(needle) === -1)
                continue;
              matches.push(n);
              const isBoundary = n.indexOf("door") !== -1 || n.indexOf("gate") !== -1 || n.indexOf("barrier") !== -1 || pn.indexOf("door") !== -1 || pn.indexOf("gate") !== -1 || pn.indexOf("barrier") !== -1;
              let hasCol = false;
              try {
                hasCol = g.method("GetComponent").overload("System.Type").invoke(Collider.type.object) != null;
              } catch (e2) {
              }
              if (isBoundary || hasCol) {
                door = g;
                break;
              }
              if (fallback == null)
                fallback = g;
            } catch (e2) {
            }
          }
        }
      } catch (e) {
        console.log("[doorDebug] scan error: " + e);
      }
      console.log("[doorDebug] scanned " + scanned + " objects for '" + needle + "'; matches: " + matches.join(", "));
      if (door == null)
        door = fallback;
      return door;
    }
    function dumpDoorScene() {
      const doors = [];
      const staffish = [];
      let scanned = 0;
      try {
        const all = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(GameObject.type.object, true);
        if (all != null) {
          for (let i = 0; i < all.length; i++) {
            try {
              const g = all.get(i);
              if (g == null || g.isNull())
                continue;
              scanned++;
              const n = g.method("get_name").invoke().toString().toLowerCase();
              let pn = "";
              try {
                const t = g.method("get_transform").invoke();
                const parent = t.method("get_parent").invoke();
                if (parent != null && !parent.isNull())
                  pn = parent.method("get_name").invoke().toString().toLowerCase();
              } catch (e2) {
              }
              if (n.indexOf("door") !== -1 || n.indexOf("gate") !== -1 || n.indexOf("barrier") !== -1 || pn.indexOf("door") !== -1 || pn.indexOf("gate") !== -1 || pn.indexOf("barrier") !== -1) {
                let active = "?";
                try {
                  active = g.method("get_activeSelf").invoke() ? "active" : "inactive";
                } catch (e2) {
                }
                doors.push(n + " [" + active + "]");
              }
              if (n.indexOf("staff") !== -1 || pn.indexOf("staff") !== -1) {
                let active = "?";
                try {
                  active = g.method("get_activeSelf").invoke() ? "active" : "inactive";
                } catch (e2) {
                }
                staffish.push(n + " [" + active + "]");
              }
            } catch (e2) {
            }
          }
        }
      } catch (e) {
        console.log("[doorDebug] dump error: " + e);
      }
      console.log("[doorDebug] scanned " + scanned + " objects; doors/gates/barriers: " + doors.join(", "));
      console.log("[doorDebug] objects with 'staff': " + staffish.join(", "));
      try {
        const pfm = PlayFabManagerClass.method("get_Instance").invoke();
        if (pfm != null && !pfm.isNull()) {
          const s = pfm.field("staffDoor").value != null ? "set" : "null";
          const v = pfm.field("vipDoor").value != null ? "set" : "null";
          const u = pfm.field("superMenuUpgrade").value != null ? "set" : "null";
          console.log("[doorDebug] PlayFabManager: staffDoor=" + s + " vipDoor=" + v + " superMenuUpgrade=" + u);
          const tags = pfm.field("purchaseTags").value;
          const names = [];
          if (tags != null && !tags.isNull()) {
            for (let ti = 0; ti < tags.length; ti++) {
              try {
                const tag = tags.get(ti);
                if (tag != null && !tag.isNull()) {
                  try {
                    names.push(tag.method("get_ItemId").invoke().toString());
                  } catch (e2) {
                  }
                }
              } catch (e2) {
              }
            }
          }
          console.log("[doorDebug] purchase tag itemIds: " + names.join(", "));
        } else {
          console.log("[doorDebug] PlayFabManager Instance NULL");
        }
      } catch (e2) {
        console.log("[doorDebug] pfm dump error: " + e2);
      }
    }
    function openDoorButton(fieldName, label) {
      Il2Cpp.perform(() => {
        try {
          let door = null;
          if (foundDoors[fieldName] != null) {
            try {
              if (!foundDoors[fieldName].isNull())
                door = foundDoors[fieldName];
              else
                foundDoors[fieldName] = null;
            } catch (e) {
              foundDoors[fieldName] = null;
            }
          }
          if (door == null)
            door = findDoorObject(fieldName);
          if (door == null || door.isNull()) {
            dumpDoorScene();
            return;
          }
          foundDoors[fieldName] = door;
          door.method("SetActive").invoke(false);
          sendNotification(label + " door opened", false, 2);
        } catch (e) {
          console.log("[doorDebug] " + label + " button error: " + e);
        }
      });
    }
    function adminGunDamage(delta) {
      Il2Cpp.perform(() => {
        try {
          if (AdminGunClass == null)
            return;
          const guns = findObjectsOfType(AdminGunClass);
          for (let i = 0; i < guns.length; i++) {
            try {
              const g = guns.get(i);
              const cur = g.field("damage").value;
              g.field("damage").value = Math.max(1, cur + delta);
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function soundboardSpam() {
      console.log("[net] soundboard at " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull()) {
            sendNotification("LARMenu not found", false, 2);
            return;
          }
          const clips = l.field("soundboardClips").value;
          const n = clips == null || clips.isNull() ? 0 : clips.length;
          if (n === 0) {
            sendNotification("No soundboard clips loaded", false, 2);
            return;
          }
          const idx = Math.floor(Math.random() * n);
          const pv = l.method("get_photonView").invoke();
          if (pv != null && !pv.isNull())
            pv.method("RPC", 3).invoke(Il2Cpp.string("RPC_PlaySoundboard"), 1, [idx]);
          sendAllOutgoing();
          sendNotification("Playing soundboard clip " + idx, false, 1);
        } catch (e) {
        }
      });
    }
    function hsvToRgb(h, s, v) {
      const i = Math.floor(h / 60) % 6;
      const f = h / 60 - Math.floor(h / 60);
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);
      let r = 0, g = 0, b = 0;
      if (i === 0) {
        r = v;
        g = t;
        b = p;
      } else if (i === 1) {
        r = q;
        g = v;
        b = p;
      } else if (i === 2) {
        r = p;
        g = v;
        b = t;
      } else if (i === 3) {
        r = p;
        g = q;
        b = v;
      } else if (i === 4) {
        r = t;
        g = p;
        b = v;
      } else {
        r = v;
        g = p;
        b = q;
      }
      return [r, g, b, 1];
    }
    function setLocalColor(c) {
      Il2Cpp.perform(() => {
        try {
          if (PhotonVRManagerClass != null) {
            try {
              PhotonVRManagerClass.method("SetColour").invoke(c);
            } catch (e) {
            }
          }
          const l = getLarMenu();
          if (l != null && !l.isNull()) {
            try {
              const c3 = Vector3.method(".ctor").invoke(c[0], c[1], c[2]);
              l.field("_localPlayerColor").value = c3;
            } catch (e) {
            }
            try {
              l.method("Handle_Local").invoke();
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    let wasFlyB = false;
    let flyHoverOn = false;
    let flyAOn = false;
    let rtFlyOn = false;
    let previousNoclipKey = false;
    let leftPlatform = null;
    let rightPlatform = null;
    function toggleColliders(enabled) {
      const meshColliders = findObjectsOfType(MeshCollider);
      for (let i = 0; i < meshColliders.length; i++) {
        try {
          const meshCollider = meshColliders.get(i);
          meshCollider.method("set_enabled").invoke(enabled);
        } catch (e) {
        }
      }
    }
    function rtFlyPostUpdate() {
      if (!rtFlyOn)
        return;
      try {
        if (GTPlayer == null || GTPlayer.isNull())
          return;
        const rb = GTPlayer.method("get_PlayerRigidBody").invoke();
        if (rb == null || rb.isNull())
          return;
        try {
          rb.method("set_useGravity").invoke(false);
        } catch (e) {
        }
        if (rightTrigger) {
          const forward = leftHandTransform.method("get_forward").invoke();
          const force = Vector3.method("op_Multiply", 2).invoke(forward, 20);
          rb.method("set_linearVelocity").invoke(force);
        } else {
          const up = Vector3.method(".ctor", 3).invoke(0, 9.81 * deltaTime, 0);
          rb.method("set_linearVelocity").invoke(up);
        }
      } catch (e) {
      }
    }
    function flyAPostUpdate() {
      if (!flyAOn)
        return;
      try {
        if (GTPlayer == null || GTPlayer.isNull())
          return;
        const rb = GTPlayer.method("get_PlayerRigidBody").invoke();
        if (rb == null || rb.isNull())
          return;
        try {
          rb.method("set_useGravity").invoke(false);
        } catch (e) {
        }
        if (leftPrimary) {
          const forward = getTransform(leftHandTransform).method("get_forward").invoke();
          const force = Vector3.method("op_Multiply", 2).invoke(forward, 20);
          rb.method("set_linearVelocity").invoke(force);
        } else {
          const up = Vector3.method(".ctor", 3).invoke(0, 9.81 * deltaTime, 0);
          rb.method("set_linearVelocity").invoke(up);
        }
      } catch (e) {
      }
    }
    let flyOriginalGravity = null;
    let flyAnchorY = null;
    function flyPostUpdate() {
      if (!flyHoverOn)
        return;
      try {
        if (GTPlayer == null || GTPlayer.isNull())
          return;
        let rb = null;
        try {
          rb = GTPlayer.method("get_PlayerRigidBody").invoke();
        } catch (e) {
        }
        if (rb != null && !rb.isNull()) {
          try {
            rb.method("set_useGravity").invoke(false);
          } catch (e) {
          }
          try {
            rb.method("set_linearVelocity").invoke(zeroVector);
          } catch (e) {
          }
        }
        try {
          const transform = getTransform(GTPlayer);
          const pos = transform.method("get_position").invoke();
          const y = pos.field("y").value;
          if (flyAnchorY === null) {
            flyAnchorY = y;
            return;
          }
          if (Math.abs(y - flyAnchorY) > 0.01) {
            const v3 = Vector3.method(".ctor", 3).invoke(pos.field("x").value, flyAnchorY, pos.field("z").value);
            transform.method("set_position").invoke(v3);
          }
        } catch (e) {
        }
      } catch (e) {
      }
    }
    let lastGameObjectRefresh = 0;
    function refreshGameObjects() {
      try {
        const livePlayer = PlayerClass.method("get_Instance").invoke();
        if (livePlayer == null || livePlayer.isNull())
          return false;
        GTPlayer = livePlayer;
        try {
          leftHandTransform = GTPlayer.field("leftHandTransform").value;
          rightHandTransform = GTPlayer.field("rightHandTransform").value;
          headCollider = GTPlayer.field("headCollider").value;
          bodyCollider = GTPlayer.field("bodyCollider").value;
        } catch (e) {
        }
        try {
          playerRigidBody = GTPlayer.method("get_PlayerRigidBody").invoke();
        } catch (e) {
        }
        return true;
      } catch (e) {
        if (!String(e).includes("abort") && !String(e).includes("access violation")) {
          console.log(`[Menu] Refresh error: ${e}`);
        }
      }
      return false;
    }
    let normalLongArmsOn = false;
    const LA_SCALE = 1.25;
    let capSceneScale = 0;
    let capHeadScale = null;
    let capHeadPos = null;
    let capBodyScale = null;
    let capBodyPos = null;
    let capTrackScale = null;
    let capTrackPos = null;
    function captureLongArmsOrig(player) {
      try {
        capSceneScale = (() => {
          try {
            return getTransform(player).method("get_localScale").invoke().field("x").value;
          } catch (e) {
            return 1;
          }
        })();
        const hc = player.field("headCollider").value;
        if (hc != null && !hc.isNull()) {
          capHeadScale = getTransform(hc).method("get_localScale").invoke();
          capHeadPos = getTransform(hc).method("get_localPosition").invoke();
        } else {
          capHeadScale = null;
          capHeadPos = null;
        }
        const bc = player.field("bodyCollider").value;
        if (bc != null && !bc.isNull()) {
          capBodyScale = getTransform(bc).method("get_localScale").invoke();
          capBodyPos = getTransform(bc).method("get_localPosition").invoke();
        } else {
          capBodyScale = null;
          capBodyPos = null;
        }
        const ts = player.field("trackingSpace").value;
        if (ts != null && !ts.isNull()) {
          capTrackScale = getTransform(ts).method("get_localScale").invoke();
          capTrackPos = getTransform(ts).method("get_localPosition").invoke();
        } else {
          capTrackScale = null;
          capTrackPos = null;
        }
      } catch (e) {
      }
    }
    function hsl2Rgb(h, s, l) {
      s /= 100;
      l /= 100;
      const k = (n) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [
        Math.round(255 * f(0)),
        Math.round(255 * f(8)),
        Math.round(255 * f(4))
      ];
    }
    function getSmoothColor() {
      hue = (hue + 0.5) % 360;
      const [r, g, b] = hsl2Rgb(hue, 100, 50);
      return { r: r / 255, g: g / 255, b: b / 255, a: 1 };
    }
    function longArmsPostUpdate() {
      if (!normalLongArmsOn)
        return;
      try {
        const player = PlayerClass.method("get_Instance").invoke();
        if (player == null || player.isNull())
          return;
        if (longArmsOriginalLength === null) {
          try {
            longArmsOriginalLength = player.field("maxArmLength").value;
          } catch (e) {
          }
        }
        try {
          player.field("maxArmLength").value = 100;
        } catch (e) {
        }
        const pt = getTransform(player);
        if (pt == null || pt.isNull())
          return;
        if (capSceneScale === 0) {
          captureLongArmsOrig(player);
        }
        const inv = 1 / LA_SCALE;
        try {
          pt.method("set_localScale").invoke([LA_SCALE, LA_SCALE, LA_SCALE]);
        } catch (e) {
        }
        try {
          const hc = player.field("headCollider").value;
          if (hc != null && !hc.isNull() && capHeadScale != null) {
            const hct = getTransform(hc);
            hct.method("set_localScale").invoke([capHeadScale.field("x").value * inv, capHeadScale.field("y").value * inv, capHeadScale.field("z").value * inv]);
            hct.method("set_localPosition").invoke([capHeadPos.field("x").value * inv, capHeadPos.field("y").value * inv, capHeadPos.field("z").value * inv]);
          }
        } catch (e) {
        }
        try {
          const bc = player.field("bodyCollider").value;
          if (bc != null && !bc.isNull() && capBodyScale != null) {
            const bct = getTransform(bc);
            bct.method("set_localScale").invoke([capBodyScale.field("x").value * inv, capBodyScale.field("y").value * inv, capBodyScale.field("z").value * inv]);
            bct.method("set_localPosition").invoke([capBodyPos.field("x").value * inv, capBodyPos.field("y").value * inv, capBodyPos.field("z").value * inv]);
          }
        } catch (e) {
        }
        try {
          const ts = player.field("trackingSpace").value;
          if (ts != null && !ts.isNull() && capTrackScale != null) {
            const tst = getTransform(ts);
            tst.method("set_localScale").invoke([capTrackScale.field("x").value * inv, capTrackScale.field("y").value * inv, capTrackScale.field("z").value * inv]);
            tst.method("set_localPosition").invoke([capTrackPos.field("x").value * inv, capTrackPos.field("y").value * inv, capTrackPos.field("z").value * inv]);
          }
        } catch (e) {
        }
      } catch (e) {
      }
    }
    function restoreFlyGravity() {
      try {
        if (GTPlayer != null) {
          const rb = GTPlayer.method("get_PlayerRigidBody").invoke();
          if (rb != null && !rb.isNull()) {
            if (flyOriginalGravity === null) {
              try {
                flyOriginalGravity = !!rb.method("get_useGravity").invoke();
              } catch (e) {
              }
            }
            try {
              rb.method("set_useGravity").invoke(flyOriginalGravity !== null ? flyOriginalGravity : true);
            } catch (e) {
            }
          }
        }
      } catch (e) {
      }
    }
    function flyB() {
      try {
        let rb = null;
        try {
          if (GTPlayer != null)
            rb = GTPlayer.method("get_PlayerRigidBody").invoke();
        } catch (e) {
        }
        if (rightSecondary) {
          try {
            if (GTPlayer != null) {
              try {
                GTPlayer.field("disableLocomotion").value = true;
              } catch (e) {
              }
              try {
                GTPlayer.field("disableMovement").value = true;
              } catch (e) {
              }
            }
          } catch (e) {
          }
          try {
            const transform = getTransform(GTPlayer);
            let forward = getTransform(rightHandTransform).method("get_forward").invoke();
            let position = transform.method("get_position").invoke();
            forward = Vector3.method("op_Multiply", 2).invoke(forward, flySpeed * 0.25 * deltaTime);
            position = Vector3.method("op_Addition", 2).invoke(position, forward);
            if (rb != null && !rb.isNull()) {
              try {
                rb.method("set_linearVelocity").invoke(zeroVector);
              } catch (e) {
              }
              try {
                rb.method("MovePosition").invoke(position);
              } catch (e) {
              }
            }
            transform.method("set_position").invoke(position);
            if (flyHoverOn && flyAnchorY !== null) {
              try {
                flyAnchorY = position.field("y").value;
              } catch (e) {
              }
            }
          } catch (e) {
          }
          wasFlyB = true;
        } else if (wasFlyB) {
          wasFlyB = false;
          try {
            if (GTPlayer != null) {
              try {
                GTPlayer.field("disableLocomotion").value = false;
              } catch (e) {
              }
              try {
                GTPlayer.field("disableMovement").value = false;
              } catch (e) {
              }
            }
          } catch (e) {
          }
        }
        if (flyHoverOn && rb != null && !rb.isNull()) {
          if (flyOriginalGravity === null) {
            try {
              flyOriginalGravity = !!rb.method("get_useGravity").invoke();
            } catch (e) {
            }
          }
          try {
            rb.method("set_useGravity").invoke(false);
          } catch (e) {
          }
          try {
            rb.method("set_linearVelocity").invoke(zeroVector);
          } catch (e) {
          }
        }
      } catch (e) {
      }
    }
    function toggleGravityLar() {
      Il2Cpp.perform(() => {
        try {
          const p = PlayerClass.method("get_Instance").invoke();
          if (p == null || p.isNull()) {
            sendNotification("Player not found", false, 2);
            return;
          }
          const cur = p.field("useCustomGravity").value;
          p.field("useCustomGravity").value = !cur;
          p.method("set_CurrentGravity").invoke(cur ? -9.81 : 0);
          sendNotification(cur ? "Gravity restored" : "Gravity OFF", false, 2);
        } catch (e) {
        }
      });
    }
    function toggleNoclipLar() {
      Il2Cpp.perform(() => {
        try {
          const p = PlayerClass.method("get_Instance").invoke();
          if (p == null || p.isNull()) {
            sendNotification("Player not found", false, 2);
            return;
          }
          const cur = p.field("disableLocomotion").value;
          p.field("disableLocomotion").value = !cur;
          p.field("disableMovement").value = !cur;
          try {
            const hc = p.field("headCollider").value;
            if (hc != null && !hc.isNull())
              hc.method("set_enabled").invoke(cur);
          } catch (e) {
          }
          try {
            const bc = p.field("bodyCollider").value;
            if (bc != null && !bc.isNull())
              bc.method("set_enabled").invoke(cur);
          } catch (e) {
          }
          sendNotification(cur ? "Noclip OFF" : "Noclip ON", false, 2);
        } catch (e) {
        }
      });
    }
    function setPlayerSizeLar(size) {
      Il2Cpp.perform(() => {
        try {
          const p = PlayerClass.method("get_Instance").invoke();
          if (p == null || p.isNull())
            return;
          p.method("SetPlayerSize").invoke(size, true);
          sendNotification("Size: " + size.toFixed(2), false, 2);
        } catch (e) {
        }
      });
    }
    function spawnSelectedNow() {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull()) {
            sendNotification("LARMenu not found", false, 2);
            return;
          }
          l.method("SpawnSelectedPrefab").invoke();
          sendAllOutgoing();
        } catch (e) {
        }
      });
    }
    function cycleSpawnerIndex(delta) {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull())
            return;
          let idx = 0;
          try {
            idx = l.field("_selectedPrefabIndex").value;
          } catch (e) {
          }
          let max = 0;
          try {
            const names = l.field("_spawnerPrefabNames").value;
            if (names != null && !names.isNull())
              max = names.length;
          } catch (e) {
          }
          if (max > 0)
            idx = (idx + delta + max) % max;
          l.field("_selectedPrefabIndex").value = idx;
          try {
            const names = l.field("_spawnerPrefabNames").value;
            if (names != null && !names.isNull() && idx >= 0 && idx < names.length) {
              const nm = names.get(idx);
              if (nm != null && !nm.isNull())
                sendNotification("Selected: " + nm.toString(), false, 2);
            }
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    function showSelectedPrefab() {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull())
            return;
          let idx = 0;
          try {
            idx = l.field("_selectedPrefabIndex").value;
          } catch (e) {
          }
          let name = "?";
          try {
            const names = l.field("_spawnerPrefabNames").value;
            if (names != null && !names.isNull() && idx >= 0 && idx < names.length) {
              const nm = names.get(idx);
              if (nm != null && !nm.isNull())
                name = nm.toString();
            }
          } catch (e) {
          }
          sendNotification("Selected: " + name, false, 2);
        } catch (e) {
        }
      });
    }
    function cleanUpSpawns() {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull())
            return;
          l.method("CleanUpMySpawns").invoke();
          sendNotification("Spawns cleaned", false, 2);
        } catch (e) {
        }
      });
    }
    const pendingFling = [];
    function applyFlingTo(obj, dir) {
      try {
        if (obj == null || obj.isNull())
          return;
        let rb = null;
        try {
          rb = obj.method("GetComponentInChildren", 1).inflate(Rigidbody).invoke();
        } catch (e) {
        }
        if (rb == null || rb.isNull()) {
          try {
            rb = obj.method("GetComponent", 1).inflate(Rigidbody).invoke();
          } catch (e) {
          }
        }
        if (rb == null || rb.isNull()) {
          try {
            rb = addComponent(obj, Rigidbody);
          } catch (e) {
          }
        }
        if (rb == null || rb.isNull())
          return;
        try {
          rb.method("set_isKinematic").invoke(false);
        } catch (e) {
        }
        try {
          rb.method("set_useGravity").invoke(false);
        } catch (e) {
        }
        try {
          rb.method("set_collisionDetectionMode").invoke(1);
        } catch (e) {
        }
        try {
          rb.method("set_linearVelocity").invoke(Vector3.method("op_Multiply", 2).invoke(dir, flingForce));
        } catch (e) {
        }
        pendingFling.push({ obj, dir, until: Date.now() + 1200 });
      } catch (e) {
      }
    }
    function PrefabGun(itemName) {
      if (!rightGrab)
        return;
      Il2Cpp.perform(() => {
        try {
          let pos = null;
          let rot = null;
          try {
            pos = leftHandTransform.method("get_position").invoke();
          } catch (e) {
          }
          try {
            rot = leftHandTransform.method("get_rotation").invoke();
          } catch (e) {
            rot = identityQuaternion;
          }
          let obj = null;
          try {
            obj = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string(itemName), pos, rot, 0, NULL);
          } catch (e) {
          }
          if (obj == null || obj.isNull()) {
            try {
              const prefab = Resources.method("Load", 1).invoke(Il2Cpp.string(itemName), GameObject.type.object);
              if (prefab != null && !prefab.isNull()) {
                obj = Object.method("Instantiate", 3).invoke(prefab, pos, rot);
              }
            } catch (e) {
            }
          }
          if (obj != null && !obj.isNull() && flingEnabled) {
            let dir = null;
            try {
              dir = leftHandTransform.method("get_forward").invoke();
            } catch (e) {
            }
            if (dir != null)
              applyFlingTo(obj, dir);
          }
          sendAllOutgoing();
        } catch (e) {
        }
      });
    }
    function frameFlingQueue() {
      const now = Date.now();
      for (let i = pendingFling.length - 1; i >= 0; i--) {
        try {
          const f = pendingFling[i];
          if (f.obj == null || f.obj.isNull() || f.until < now) {
            pendingFling.splice(i, 1);
            continue;
          }
          let rb = null;
          try {
            rb = f.obj.method("GetComponentInChildren", 1).inflate(Rigidbody).invoke();
          } catch (e) {
          }
          try {
            if (rb != null && !rb.isNull()) {
              rb.method("set_linearVelocity").invoke(Vector3.method("op_Multiply", 2).invoke(f.dir, flingForce));
            }
          } catch (e) {
          }
        } catch (e) {
          pendingFling.splice(i, 1);
        }
      }
    }
    function longArms(on) {
      Il2Cpp.perform(() => {
        try {
          const p = PlayerClass.method("get_Instance").invoke();
          if (p == null || p.isNull()) {
            sendNotification("Player not found", false, 2);
            return;
          }
          if (longArmsOriginalLength === null) {
            try {
              longArmsOriginalLength = p.field("maxArmLength").value;
            } catch (e) {
            }
          }
          const len = on ? 100 : longArmsOriginalLength !== null ? longArmsOriginalLength : 0.9;
          try {
            p.field("maxArmLength").value = len;
          } catch (e) {
          }
          try {
            const m = getMods();
            if (m != null && !m.isNull()) {
              m.field("_toggleLongArms").value = on;
            }
          } catch (e) {
          }
          sendNotification(on ? "Long arms ON (extended reach)" : "Long arms OFF", false, 2);
        } catch (e) {
        }
      });
    }
    function flyB_setSpeed(delta) {
      flySpeed = Math.max(1, flySpeed + delta);
      sendNotification("Fly speed: " + flySpeed, false, 2);
    }
    buttons[17] = [
      new ButtonInfo({
        buttonText: "Exit Movement Mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      ,
      new ButtonInfo({
        buttonText: "Fly & No Grav (A)",
        method: () => {
          flyAOn = true;
        },
        enableMethod: () => {
          flyAOn = true;
        },
        disableMethod: () => {
          flyAOn = false;
        },
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "Platforms",
        method: () => {
          if (leftGrab && leftPlatform == null) {
            leftPlatform = createObject(Vector3.method("op_Addition", 2).invoke(leftHandTransform.method("get_position").invoke(), [0, -0.035, 0]), leftHandTransform.method("get_rotation").invoke(), [0.035, 0.15, 0.35], 3, bgColor, null, true);
            try {
              const pcol = getComponent(leftPlatform, Collider);
              if (pcol != null && !pcol.isNull())
                pcol.method("set_isTrigger").invoke(false);
            } catch (e) {
            }
          } else if (!leftGrab && leftPlatform != null) {
            Destroy(leftPlatform);
            leftPlatform = null;
          }
        },
        isTogglable: true,
        toolTip: "Press while grabbing to spawn platform on that hand"
      }),
      new ButtonInfo({
        buttonText: "Noclip (RT)",
        method: () => {
          try {
            if (rightTrigger && !previousNoclipKey) {
              toggleColliders(false);
            }
            if (!rightTrigger && previousNoclipKey) {
              toggleColliders(true);
            }
            previousNoclipKey = rightTrigger;
          } catch (e) {
          }
        },
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "RT Fly & No Grav",
        method: () => {
          rtFlyOn = true;
        },
        enableMethod: () => {
          rtFlyOn = true;
        },
        disableMethod: () => {
          rtFlyOn = false;
        },
        isTogglable: true
      })
    ];
    buttons[19] = [
      new ButtonInfo({
        buttonText: "Exit Name Mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "ex ontop",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("<size=58><color=#b14d95>exploding ontop looool");
            } catch (e) {
            }
          });
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "dont press dis",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("Ima suck ya dick");
            } catch (e) {
            }
          });
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "large name",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("<size=-90000><color=#FFFFFF>im horny");
            } catch (e) {
            }
          });
        },
        isTogglable: false
      })
    ];
    buttons[20] = [
      new ButtonInfo({
        buttonText: "Exit spawner",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "spawn grappler",
        method: () => PrefabGun("Prefabs/Grabbables/GRAPPLER"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn rocket hand",
        method: () => PrefabGun("prefabs/grabbables/rockethand"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn backpack",
        method: () => PrefabGun("Prefabs/Grabbables/BACKPACK"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn backpack but big",
        method: () => PrefabGun("Prefabs/Grabbables/BIGBACKPACK"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn boombox",
        method: () => PrefabGun("Prefabs/Grabbables/BOOMBOX"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn fuse",
        method: () => PrefabGun("Prefabs/Grabbables/FUSE"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn boombox but blue",
        method: () => PrefabGun("Prefabs/Grabbables/BOOMBOX_BLUE"),
        isTogglable: true
      })
    ];
    buttons[21] = [
      new ButtonInfo({
        buttonText: "Exit Players",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      })
    ];
    buttons[27] = [
      new ButtonInfo({
        buttonText: "Exit player",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "rgb",
        enableMethod: () => {
          rgbColorEnabled = true;
          lastRgbApply = 0;
        },
        disableMethod: () => {
          rgbColorEnabled = false;
        },
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "bright rgb (dont really work)",
        method: () => {
          const color = getSmoothColor();
          PhotonVRManagerClass.method("SetColour").invoke([
            color.r * 3,
            color.g * 3,
            color.b * 3,
            color.a * 9999
          ]);
        }
      }),
      new ButtonInfo({
        buttonText: "strobe",
        enableMethod: () => {
          strobeEnabled = true;
          lastStrobeTime = 0;
        },
        disableMethod: () => {
          strobeEnabled = false;
        },
        isTogglable: true
      })
    ];
    buttons[28] = [
      new ButtonInfo({
        buttonText: "Exit OP mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "Lag Spike all",
        method: () => {
          for (let i = 0; i < 50; i++) {
            const thingforlag = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string("Prefabs/Grabbables/BOOMBOX"), [100, -100, 0], identityQuaternion, 0, NULL);
            Destroy(thingforlag);
            sendAllOutgoing();
          }
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "crash all",
        method: () => {
          for (let i = 0; i < 1500; i++) {
            const thingforlag = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string("Prefabs/Grabbables/BOOMBOX"), [100, -100, 0], identityQuaternion, 0, NULL);
            Destroy(thingforlag);
            sendAllOutgoing();
          }
        },
        isTogglable: false
      })
    ];
    buttons[0].push(new ButtonInfo({ buttonText: "spawner", method: () => {
      currentCategory = 20;
      currentPage = 0;
    }, isTogglable: false }));
    buttons[0].push(new ButtonInfo({ buttonText: "movement", method: () => {
      currentCategory = 17;
      currentPage = 0;
    }, isTogglable: false }));
    buttons[0].push(new ButtonInfo({ buttonText: "name mods", method: () => {
      currentCategory = 19;
      currentPage = 0;
    }, isTogglable: false }));
    buttons[0].push(new ButtonInfo({ buttonText: "OP mods", method: () => {
      currentCategory = 28;
      currentPage = 0;
    }, isTogglable: false }));
    buttons[0].push(new ButtonInfo({ buttonText: "player", method: () => {
      currentCategory = 27;
      currentPage = 0;
    }, isTogglable: false }));
    rebuildButtonMap();
    setTimeout(() => {
      try {
        const m = getMods();
        if (m != null && !m.isNull()) {
          const syncBtn = (text, fieldName) => {
            try {
              const b = getIndex(text);
              if (b != null)
                b.enabled = !!m.field(fieldName).value;
            } catch (e) {
            }
          };
          syncBtn("Fly mod", "_toggleFly");
          syncBtn("Speed boost", "_toggleSpeedBoost");
          syncBtn("Extra speed", "_toggleExtraSpeedBoost");
          syncBtn("Long arms", "_toggleLongArms");
          syncBtn("Ghost monke", "_toggleGhostMonke");
          syncBtn("Platforms", "_togglePlatforms");
          syncBtn("Low gravity", "_toggleLowGravity");
          syncBtn("Flip gravity", "_toggleFlipGravity");
          syncBtn("Air swim", "_toggleAirSwim");
          syncBtn("RGB", "_toggleRGB");
        }
      } catch (e) {
      }
    }, 8e3);
    if (PVPPlayerClass != null) {
      try {
        PVPPlayerClass.method("TakeDamage").implementation = function(damage) {
          if (godModeEnabled)
            return;
          return this.method("TakeDamage").invoke(damage);
        };
      } catch (e) {
      }
      try {
        PVPPlayerClass.method("HandleDamage").implementation = function(damage) {
          if (godModeEnabled)
            return;
          return this.method("HandleDamage").invoke(damage);
        };
      } catch (e) {
      }
      try {
        PVPPlayerClass.method("RPC_DamagePlayer").implementation = function(damage) {
          if (godModeEnabled)
            return;
          return this.method("RPC_DamagePlayer").invoke(damage);
        };
      } catch (e) {
      }
    }
    if (PhotonVRManagerClass != null) {
      try {
        PhotonVRManagerClass.method("OnDisconnected").implementation = function(cause) {
          try {
            let v = "unknown";
            try {
              v = String(cause);
            } catch (e) {
            }
            try {
              if (cause != null && typeof cause === "object" && cause.value !== void 0)
                v = String(cause.value);
            } catch (e) {
            }
            try {
              if (typeof cause === "number")
                v = String(cause);
            } catch (e) {
            }
          } catch (e) {
          }
          return this.method("OnDisconnected").invoke(cause);
        };
      } catch (e) {
      }
    }
    try {
      const DestroyGuardClass = classOf(AssemblyCSharp, "LethalApeR.Networking.DestroyGuard");
      if (DestroyGuardClass != null) {
        DestroyGuardClass.method("Flag").implementation = function(senderActor, detail) {
          try {
            let d = "?";
            try {
              d = String(detail);
            } catch (e) {
            }
            console.log("[net] DestroyGuard.Flag actor=" + String(senderActor) + " detail=" + d + " at " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
          } catch (e) {
          }
          return this.method("Flag").invoke(senderActor, detail);
        };
      }
    } catch (e) {
    }
    if (WardrobeManagerClass != null) {
      try {
        WardrobeManagerClass.method("RefreshCosmetics").implementation = function() {
          try {
            this.method("RefreshCosmetics").invoke();
          } catch (e) {
          }
          try {
            const all = this.field("_cosmetics").value;
            if (all == null || all.isNull())
              return;
            const owned = this.field("ownedCosmetics").value;
            if (owned == null || owned.isNull())
              return;
            const allCount = all.method("get_Count").invoke();
            const ownedCount = owned.method("get_Count").invoke();
            for (let i = 0; i < allCount; i++) {
              try {
                const g = all.method("get_Item").invoke(i);
                if (g == null || g.isNull())
                  continue;
                let has = false;
                for (let j = 0; j < ownedCount; j++) {
                  try {
                    if (owned.method("get_Item").invoke(j).handle.equals(g.handle)) {
                      has = true;
                      break;
                    }
                  } catch (e2) {
                  }
                }
                if (!has) {
                  try {
                    owned.method("Add").invoke(g);
                  } catch (e2) {
                  }
                }
              } catch (e2) {
              }
            }
          } catch (e) {
          }
        };
      } catch (e) {
      }
    }
    let isPlayingSound = false;
    let soundEndTime = 0;
    let currentPlayingClip = null;
    let soundPreviewObject = null;
    let soundPreviewSource = null;
    const soundboardCache = /* @__PURE__ */ new Map();
    let soundboardArmed = null;
    let fullSoundList = [];
    let loudMicEnabled = false;
    let hearMyselfEnabled = false;
    let lastHearMyselfApply = 0;
    let lastHearMyselfDump = 0;
    function getFileNameWithoutExtension(path) {
      const parts = path.replace(/\\/g, "/").split("/");
      const last = parts[parts.length - 1];
      const dotIdx = last.lastIndexOf(".");
      return dotIdx === -1 ? last : last.substring(0, dotIdx);
    }
    function getFileExtension(path) {
      const cleanPath = path.split("?")[0].split("#")[0];
      const dotIdx = cleanPath.lastIndexOf(".");
      return dotIdx === -1 ? "" : cleanPath.substring(dotIdx + 1).toLowerCase();
    }
    function KillGun() {
      if (!rightGrab)
        return;
      const gunData = renderGun(-1);
      const gunPointer = gunData.gunPointer;
      if (rightTrigger) {
        const targetPos = getTransform(gunPointer).method("get_position").invoke();
        const allPhotonViews = Object.method("FindObjectsOfType").inflate(Il2Cpp.domain.assembly("PhotonUnityNetworking").image.class("Photon.Pun.PhotonView")).invoke();
        for (let i = 0; i < allPhotonViews.length; i++) {
          const pv = allPhotonViews.get(i);
          const go = pv.method("get_gameObject").invoke();
          if (!go)
            continue;
          const name = go.method("get_name").invoke().toString().toLowerCase();
          if (!name.includes("sandman"))
            continue;
          const transform = getTransform(go);
          transform.method("set_position").invoke(targetPos);
          try {
            const rb = go.method("GetComponent").inflate(Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody")).invoke();
            if (rb && !rb.isNull()) {
              rb.method("set_isKinematic").invoke(true);
              rb.method("set_velocity").invoke(Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Vector3").field("zero").value);
              rb.method("set_angularVelocity").invoke(Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Vector3").field("zero").value);
            }
          } catch (_) {
          }
          try {
            const pun = pv.method("get_IsMine").invoke();
            if (pun) {
              pv.method("RPC").invoke(Il2Cpp.string("SyncPosition"), Il2Cpp.domain.assembly("PhotonUnityNetworking").image.class("Photon.Pun.RpcTarget").field("All").value, targetPos);
            }
          } catch (_) {
          }
          sendAllOutgoing();
          break;
        }
      }
    }
    function getRecorder() {
      try {
        if (PhotonVoiceViewClass != null) {
          const views = findObjectsOfType(PhotonVoiceViewClass);
          console.log("[VOICE] PhotonVoiceView search: " + (views && !views.isNull() ? views.length : "null/empty"));
          if (views && !views.isNull()) {
            for (let i = 0; i < views.length; i++) {
              try {
                const view = views.get(i);
                if (!view || view.isNull()) {
                  console.log("[VOICE]   view " + i + " is null");
                  continue;
                }
                const pv = view.field("photonView").value;
                if (!pv || pv.isNull()) {
                  console.log("[VOICE]   view " + i + " photonView null");
                  continue;
                }
                const isMine = pv.method("get_IsMine").invoke();
                console.log("[VOICE]   view " + i + " IsMine=" + isMine);
                if (!isMine)
                  continue;
                const rec = view.method("get_RecorderInUse").invoke();
                console.log("[VOICE]   view " + i + " RecorderInUse=" + (rec ? "found" : "null") + (rec && !rec.isNull() ? " [" + rec.class.name + "]" : ""));
                if (rec && !rec.isNull())
                  return rec;
              } catch (e) {
                console.log("[VOICE]   view " + i + " error: " + e);
              }
            }
          }
        } else {
          console.log("[VOICE] PhotonVoiceViewClass is null");
        }
      } catch (e) {
        console.log("[VOICE] PhotonVoiceView search error: " + e);
      }
      try {
        if (PunVoiceClientClass != null) {
          const instance = PunVoiceClientClass.method("get_Instance").invoke();
          console.log("[VOICE] PunVoiceClient.Instance=" + (instance && !instance.isNull() ? "found" : "null"));
          if (instance && !instance.isNull()) {
            try {
              const primary = instance.method("get_PrimaryRecorder").invoke();
              console.log("[VOICE]   get_PrimaryRecorder=" + (primary && !primary.isNull() ? "found" : "null"));
              if (primary && !primary.isNull()) {
                return primary;
              }
            } catch (e) {
              console.log("[VOICE]   get_PrimaryRecorder error: " + e);
            }
            try {
              const primary = instance.field("primaryRecorder").value;
              console.log("[VOICE]   field primaryRecorder=" + (primary && !primary.isNull() ? "found" : "null"));
              if (primary && !primary.isNull()) {
                return primary;
              }
            } catch (e) {
              console.log("[VOICE]   field primaryRecorder error: " + e);
            }
          }
        } else {
          console.log("[VOICE] PunVoiceClientClass is null");
        }
      } catch (e) {
        console.log("[VOICE] PunVoiceClient path error: " + e);
      }
      try {
        if (VoiceConnectionClass != null) {
          const conns = findObjectsOfType(VoiceConnectionClass);
          console.log("[VOICE] VoiceConnection search: " + (conns && !conns.isNull() ? conns.length : "null/empty"));
          if (conns && !conns.isNull()) {
            for (let i = 0; i < conns.length; i++) {
              try {
                const conn = conns.get(i);
                if (!conn || conn.isNull())
                  continue;
                const primary = conn.method("get_PrimaryRecorder").invoke();
                console.log("[VOICE]   conn " + i + " PrimaryRecorder=" + (primary && !primary.isNull() ? "found" : "null"));
                if (primary && !primary.isNull()) {
                  return primary;
                }
              } catch (e) {
                console.log("[VOICE]   conn " + i + " error: " + e);
              }
            }
          }
        } else {
          console.log("[VOICE] VoiceConnectionClass is null");
        }
      } catch (e) {
        console.log("[VOICE] VoiceConnection path error: " + e);
      }
      try {
        if (RecorderClass == null) {
          console.log("[VOICE] RecorderClass is null");
          return null;
        }
        const RecorderFinder = findObjectOfType(RecorderClass);
        console.log("[VOICE] direct Recorder find=" + (RecorderFinder && !RecorderFinder.isNull() ? "found" : "null"));
        if (RecorderFinder && !RecorderFinder.isNull())
          return RecorderFinder;
      } catch (e) {
        console.log("[VOICE] direct Recorder error: " + e);
      }
      return null;
    }
    function clientStateName(v) {
      const names = {
        0: "PeerCreated",
        1: "Authenticating",
        2: "Authenticated",
        3: "JoiningLobby",
        4: "JoinedLobby",
        5: "DisconnectingFromMasterServer",
        6: "ConnectingToGameServer",
        7: "ConnectedToGameServer",
        8: "Joining",
        9: "Joined",
        10: "Leaving",
        11: "DisconnectingFromGameServer",
        12: "ConnectingToMasterServer",
        13: "Disconnecting",
        14: "Disconnected",
        15: "ConnectedToMasterServer",
        16: "ConnectingToNameServer",
        17: "ConnectedToNameServer",
        18: "DisconnectingFromNameServer",
        19: "ConnectWithFallbackProtocol"
      };
      const n = names[v];
      return n !== void 0 ? n + " (" + v + ")" : "UNKNOWN (" + v + ")";
    }
    function dumpRecorderState(recorder, tag) {
      try {
        if (!recorder || recorder.isNull()) {
          console.log("[VOICE] " + tag + ": recorder null");
          return;
        }
        console.log("[VOICE] " + tag + ": class=" + recorder.class.name);
        console.log("[VOICE] " + tag + ": DebugEchoMode=" + (() => {
          try {
            return !!recorder.method("get_DebugEchoMode").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": TransmitEnabled=" + (() => {
          try {
            return !!recorder.method("get_TransmitEnabled").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": RecordingEnabled=" + (() => {
          try {
            return !!recorder.method("get_RecordingEnabled").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": VoiceDetection=" + (() => {
          try {
            return !!recorder.method("get_VoiceDetection").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": SourceType=" + (() => {
          try {
            return recorder.method("get_SourceType").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": IsCurrentlyTransmitting=" + (() => {
          try {
            return !!recorder.method("get_IsCurrentlyTransmitting").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        try {
          const vo = recorder.field("voice").value;
          console.log("[VOICE] " + tag + ": voice=" + (vo && !vo.isNull() ? "EXISTS (" + vo.class.name + ") handle=0x" + vo.handle.toString(16) : "null"));
        } catch (e) {
          console.log("[VOICE] " + tag + ": voice field ERR:" + e);
        }
        try {
          if (PunVoiceClientClass != null) {
            const inst = PunVoiceClientClass.method("get_Instance").invoke();
            if (inst && !inst.isNull()) {
              let csm = null;
              try {
                csm = inst.method("get_ClientState").invoke();
              } catch (e) {
                console.log("[VOICE] " + tag + ": ClientState get ERR:" + e);
              }
              if (csm != null) {
                let v = null;
                try {
                  v = csm.value;
                } catch (e) {
                }
                if (v === null || v === void 0) {
                  try {
                    v = csm.field("value__").value;
                  } catch (e) {
                  }
                }
                console.log("[VOICE] " + tag + ": PunVoiceClient ClientState=" + (v !== null && v !== void 0 ? clientStateName(v) : "unreadable"));
              } else {
                console.log("[VOICE] " + tag + ": ClientState returned null");
              }
            } else {
              console.log("[VOICE] " + tag + ": PunVoiceClient instance null");
            }
          } else {
            console.log("[VOICE] " + tag + ": PunVoiceClientClass null");
          }
        } catch (e) {
          console.log("[VOICE] " + tag + ": ClientState ERR:" + e);
        }
        try {
          if (SpeakerClass != null) {
            const spk = findObjectsOfType(SpeakerClass);
            console.log("[VOICE] " + tag + ": Speakers=" + (spk && !spk.isNull() ? spk.length : "none"));
            if (spk && !spk.isNull()) {
              for (let i = 0; i < spk.length; i++) {
                try {
                  const s = spk.get(i);
                  const linked = (() => {
                    try {
                      return !!s.method("get_IsLinked").invoke();
                    } catch (e) {
                      return "ERR";
                    }
                  })();
                  const playing = (() => {
                    try {
                      return !!s.method("get_IsPlaying").invoke();
                    } catch (e) {
                      return "ERR";
                    }
                  })();
                  console.log("[VOICE]   speaker " + i + ": linked=" + linked + " playing=" + playing);
                } catch (e) {
                }
              }
            }
          } else {
            console.log("[VOICE] " + tag + ": SpeakerClass null");
          }
        } catch (e) {
          console.log("[VOICE] " + tag + ": Speakers ERR:" + e);
        }
      } catch (e) {
        console.log("[VOICE] " + tag + " dump error: " + e);
      }
    }
    function restartRecorder(recorder) {
      try {
        const r = recorder.method("RestartRecording").invoke();
        console.log("[VOICE] RestartRecording() -> " + r);
        return;
      } catch (e) {
        console.log("[VOICE] RestartRecording() error: " + e);
      }
      try {
        const r = recorder.method("RestartRecording", 1).invoke(true);
        console.log("[VOICE] RestartRecording(true) -> " + r);
        return;
      } catch (e) {
        console.log("[VOICE] RestartRecording(true) error: " + e);
      }
      try {
        recorder.method("StopRecording").invoke();
        console.log("[VOICE] StopRecording ok");
      } catch (e) {
        console.log("[VOICE] StopRecording error: " + e);
      }
      try {
        recorder.method("StartRecording").invoke();
        console.log("[VOICE] StartRecording ok");
      } catch (e) {
        console.log("[VOICE] StartRecording error: " + e);
      }
    }
    function applyLoudMic(enabled) {
      loudMicEnabled = enabled;
      try {
        const recorder = getRecorder();
        if (recorder && !recorder.isNull()) {
          try {
            recorder.method("set_Bitrate").invoke(enabled ? 192e3 : 24e3);
          } catch (e) {
          }
          try {
            recorder.method("set_SamplingRate").invoke(enabled ? 48e3 : 24e3);
          } catch (e) {
          }
          restartRecorder(recorder);
        }
      } catch (e) {
      }
    }
    let lastVoiceHandle = null;
    let lastVoiceReapplyTime = 0;
    function toggleHearMyself(enabled) {
      hearMyselfEnabled = enabled;
      lastHearMyselfApply = 0;
      console.log("[VOICE] toggleHearMyself(" + enabled + ") START");
      try {
        const recorder = getRecorder();
        if (recorder == null || recorder.isNull()) {
          console.log("[VOICE] hear myself: no recorder found (getRecorder returned null)");
          return;
        }
        dumpRecorderState(recorder, "before toggle");
        let setOk = false;
        try {
          recorder.method("set_DebugEchoMode").invoke(enabled);
          setOk = true;
          console.log("[VOICE] set_DebugEchoMode(" + enabled + ") ok");
        } catch (e) {
          console.log("[VOICE] set_DebugEchoMode error: " + e);
        }
        try {
          const after = !!recorder.method("get_DebugEchoMode").invoke();
          console.log("[VOICE] readback DebugEchoMode=" + after);
          if (after !== enabled) {
            try {
              recorder.field("debugEchoMode").value = enabled;
              setOk = true;
              console.log("[VOICE] field debugEchoMode written -> " + enabled);
            } catch (e) {
              console.log("[VOICE] field debugEchoMode write error: " + e);
            }
          }
        } catch (e) {
          console.log("[VOICE] readback error: " + e);
        }
        if (!setOk) {
          try {
            recorder.field("debugEchoMode").value = enabled;
            console.log("[VOICE] fallback field debugEchoMode written -> " + enabled);
          } catch (e) {
            console.log("[VOICE] fallback field write error: " + e);
          }
        }
        if (enabled) {
          try {
            recorder.method("set_VoiceDetection").invoke(false);
            console.log("[VOICE] VoiceDetection forced off");
          } catch (e) {
            console.log("[VOICE] set_VoiceDetection error: " + e);
          }
          try {
            recorder.method("set_TransmitEnabled").invoke(true);
          } catch (e) {
          }
          try {
            recorder.method("set_RecordingEnabled").invoke(true);
          } catch (e) {
          }
        }
        console.log("[VOICE] hear myself -> " + enabled);
        try {
          const vo = recorder.field("voice").value;
          console.log("[VOICE] voice handle before restart=0x" + (vo && !vo.isNull() ? vo.handle.toString(16) : "null"));
        } catch (e) {
        }
        restartRecorder(recorder);
        try {
          const vo = recorder.field("voice").value;
          if (vo && !vo.isNull())
            lastVoiceHandle = vo.handle;
          console.log("[VOICE] voice handle after restart=0x" + (vo && !vo.isNull() ? vo.handle.toString(16) : "null"));
        } catch (e) {
        }
        dumpRecorderState(recorder, "after toggle");
      } catch (e) {
        console.log("[VOICE] hear myself error: " + e);
      }
      console.log("[VOICE] toggleHearMyself END");
    }
    function applyHearMyself() {
      try {
        if (!hearMyselfEnabled)
          return;
        const recorder = getRecorder();
        if (recorder == null || recorder.isNull()) {
          console.log("[VOICE] applyHearMyself: recorder null");
          return;
        }
        let cur = false;
        try {
          cur = !!recorder.method("get_DebugEchoMode").invoke();
        } catch (e) {
        }
        console.log("[VOICE] applyHearMyself: current DebugEchoMode=" + cur);
        if (cur) {
          try {
            const vo = recorder.field("voice").value;
            if (vo && !vo.isNull()) {
              const h = vo.handle;
              if (lastVoiceHandle != null && h !== lastVoiceHandle) {
                console.log("[VOICE] applyHearMyself: voice recreated (0x" + lastVoiceHandle.toString(16) + " -> 0x" + h.toString(16) + ")");
                if (time - lastVoiceReapplyTime > 3) {
                  lastVoiceReapplyTime = time;
                  try {
                    recorder.method("set_DebugEchoMode").invoke(true);
                  } catch (e) {
                  }
                  restartRecorder(recorder);
                  console.log("[VOICE] applyHearMyself: re-applied echo + restarted (capped)");
                }
              }
              lastVoiceHandle = h;
            }
          } catch (e) {
          }
          console.log("[VOICE] applyHearMyself: already true, skipping");
          return;
        }
        try {
          recorder.method("set_DebugEchoMode").invoke(true);
        } catch (e) {
          console.log("[VOICE] applyHearMyself set error: " + e);
        }
        try {
          if (!recorder.method("get_DebugEchoMode").invoke()) {
            try {
              recorder.field("debugEchoMode").value = true;
              console.log("[VOICE] applyHearMyself: field fallback written");
            } catch (e) {
              console.log("[VOICE] applyHearMyself field error: " + e);
            }
          }
        } catch (e) {
        }
        try {
          recorder.method("set_VoiceDetection").invoke(false);
        } catch (e) {
        }
        restartRecorder(recorder);
        console.log("[VOICE] applyHearMyself: reapplied + restarted");
      } catch (e) {
        console.log("[VOICE] applyHearMyself error: " + e);
      }
    }
    function getSoundPreviewSource() {
      try {
        if (soundPreviewSource && !soundPreviewSource.isNull?.()) {
          try {
            soundPreviewSource.method("get_enabled").invoke();
            return soundPreviewSource;
          } catch (e) {
          }
        }
      } catch (e) {
      }
      try {
        soundPreviewObject = createObject(zeroVector, identityQuaternion, [1e-3, 1e-3, 1e-3], 0, [0, 0, 0, 0]);
        Object.method("DontDestroyOnLoad", 1).invoke(soundPreviewObject);
        try {
          Destroy(getComponent(soundPreviewObject, BoxCollider));
        } catch (e) {
        }
        if (AudioSourceClass == null)
          return null;
        soundPreviewSource = addComponent(soundPreviewObject, AudioSourceClass);
        soundPreviewSource.method("set_playOnAwake").invoke(false);
        soundPreviewSource.method("set_loop").invoke(false);
        soundPreviewSource.method("set_spatialBlend").invoke(0);
        soundPreviewSource.method("set_volume").invoke(1);
        return soundPreviewSource;
      } catch (e) {
        return null;
      }
    }
    function playLocalSoundPreview(clip) {
      try {
        const source = getSoundPreviewSource();
        if (!source || source.isNull?.())
          return;
        try {
          source.method("Stop").invoke();
        } catch (e) {
        }
        source.method("set_clip").invoke(clip);
        source.method("set_time").invoke(0);
        source.method("set_volume").invoke(1);
        source.method("set_spatialBlend").invoke(0);
        source.method("set_loop").invoke(false);
        source.method("set_mute").invoke(false);
        source.method("set_enabled").invoke(true);
        source.method("Play", 0).invoke();
      } catch (e) {
      }
    }
    function stopLocalSoundPreview() {
      try {
        const src = getSoundPreviewSource();
        if (!src || src.isNull?.())
          return;
        try {
          src.method("Stop").invoke();
        } catch (e) {
        }
        try {
          src.method("set_clip").invoke(NULL);
        } catch (e) {
        }
      } catch (e) {
      }
    }
    function stopSound() {
      stopLocalSoundPreview();
      const recorder = getRecorder();
      if (recorder && !recorder.isNull()) {
        try {
          try {
            recorder.method("StopRecording").invoke();
          } catch (e) {
          }
          try {
            recorder.method("set_RecordingEnabled").invoke(true);
          } catch (e) {
          }
          try {
            recorder.method("set_SourceType").invoke(0);
          } catch (e) {
          }
          try {
            recorder.method("set_AudioClip").invoke(NULL);
          } catch (e) {
          }
          try {
            recorder.method("set_LoopAudioClip").invoke(false);
          } catch (e) {
          }
          try {
            recorder.method("set_TransmitEnabled").invoke(true);
          } catch (e) {
          }
          try {
            recorder.method("set_UseOnAudioFilterRead").invoke(false);
          } catch (e) {
          }
          try {
            recorder.method("set_VoiceDetection").invoke(false);
          } catch (e) {
          }
          restartRecorder(recorder);
        } catch (e) {
        }
      }
      isPlayingSound = false;
      currentPlayingClip = null;
    }
    function parseWavBuffer(filePath, buffer) {
      const len = buffer.length;
      const view = new DataView(buffer.buffer);
      if (view.getUint32(0, true) !== 1179011410) {
        return null;
      }
      if (view.getUint32(8, true) !== 1163280727) {
        return null;
      }
      let offset = 12;
      let channels = 0;
      let sampleRate = 0;
      let bitsPerSample = 0;
      let dataOffset = 0;
      let dataSize = 0;
      while (offset < len - 8) {
        const chunkId = view.getUint32(offset, true);
        const chunkSize = view.getUint32(offset + 4, true);
        offset += 8;
        if (chunkId === 544501094) {
          channels = view.getUint16(offset + 2, true);
          sampleRate = view.getUint32(offset + 4, true);
          bitsPerSample = view.getUint16(offset + 14, true);
        } else if (chunkId === 1635017060) {
          dataOffset = offset;
          dataSize = chunkSize;
          break;
        }
        offset += chunkSize % 2 === 0 ? chunkSize : chunkSize + 1;
      }
      if (dataOffset === 0 || dataSize === 0) {
        return null;
      }
      let sampleCount = 0;
      let floatSamples;
      const inv32768 = 1 / 32768;
      const inv128 = 1 / 128;
      if (bitsPerSample === 16) {
        sampleCount = dataSize >> 1;
        const s16 = new Int16Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = s16[i] * inv32768;
      } else if (bitsPerSample === 8) {
        sampleCount = dataSize;
        const u8 = new Uint8Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = (u8[i] - 128) * inv128;
      } else if (bitsPerSample === 32) {
        sampleCount = dataSize >> 2;
        const f32 = new Float32Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        floatSamples.set(f32);
      } else {
        return null;
      }
      if (loudMicEnabled) {
        const boost = 2.5;
        for (let i = 0; i < floatSamples.length; i++) {
          let s = floatSamples[i] * boost;
          if (s > 1)
            s = 1;
          if (s < -1)
            s = -1;
          floatSamples[i] = s;
        }
      }
      if (AudioClipClass == null) {
        return null;
      }
      return buildClipFromFloats(filePath, floatSamples, sampleRate, channels);
    }
    function buildClipFromFloats(filePath, floatSamples, sampleRate, channels) {
      try {
        if (AudioClipClass == null) {
          return null;
        }
        const nameOnly = getFileNameWithoutExtension(filePath);
        const createM = AudioClipClass.tryMethod("Create", 6) || AudioClipClass.tryMethod("Create", 5) || AudioClipClass.tryMethod("Create", 7);
        if (!createM) {
          return null;
        }
        const sampleCount = floatSamples.length;
        const createArgs = [Il2Cpp.string(nameOnly), sampleCount / channels, channels, sampleRate, false];
        while (createArgs.length < createM.parameters.length)
          createArgs.push(NULL);
        const unityClip = createM.invoke(...createArgs);
        const floatClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.Single");
        const unityArray = Il2Cpp.array(floatClass, sampleCount);
        try {
          unityArray.elements.handle.writeByteArray(new Uint8Array(floatSamples.buffer));
          const probe = new Float32Array(unityArray.elements.handle.readByteArray(Math.min(16, sampleCount * 4)));
          if (Math.abs(probe[0] - floatSamples[0]) > 1e-4) {
            for (let i = 0; i < floatSamples.length; i++)
              unityArray.set(i, floatSamples[i]);
          }
        } catch (e) {
          throw e;
        }
        unityClip.method("SetData", 2).invoke(unityArray, 0);
        return { clip: unityClip, duration: sampleCount / (sampleRate * channels), sampleRate, channels };
      } catch (e) {
        return null;
      }
    }
    function parsePcmBuffer(filePath, pcm) {
      try {
        if (pcm == null || pcm.length < 2)
          return null;
        const sampleCount = pcm.length >> 1;
        const s16 = new Int16Array(pcm.buffer, pcm.byteOffset, sampleCount);
        const floatSamples = new Float32Array(sampleCount);
        const inv32768 = 1 / 32768;
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = s16[i] * inv32768;
        if (loudMicEnabled) {
          const boost = 2.5;
          for (let i = 0; i < floatSamples.length; i++) {
            let s = floatSamples[i] * boost;
            if (s > 1)
              s = 1;
            if (s < -1)
              s = -1;
            floatSamples[i] = s;
          }
        }
        return buildClipFromFloats(filePath, floatSamples, 44100, 1);
      } catch (e) {
        return null;
      }
    }
    const soundConvertUrl = "https://fuzzy-bees-tan.loca.lt";
    let soundByteClass = null;
    function getSoundByteClass() {
      if (soundByteClass && !soundByteClass.isNull())
        return soundByteClass;
      const candidates = ["System.Private.CoreLib", "mscorlib", "System.Runtime", "netstandard"];
      for (const an of candidates) {
        try {
          const asm = Il2Cpp.domain.assembly(an);
          if (asm) {
            const k = asm.image.class("System.Byte");
            if (k) {
              soundByteClass = k;
              return k;
            }
          }
        } catch (e) {
        }
      }
      return null;
    }
    function soundBytesToIl2CppArray(bytes) {
      const cls = getSoundByteClass();
      if (!cls)
        throw new Error("no byte class");
      const arr = Il2Cpp.array(cls, bytes.length);
      arr.elements.handle.writeByteArray(bytes);
      return arr;
    }
    function asciiBytes(str) {
      const out = new Uint8Array(str.length);
      for (let i = 0; i < str.length; i++)
        out[i] = str.charCodeAt(i) & 255;
      return out;
    }
    function buildMultipartBody(fileBytes, fileName) {
      const boundary = "----bwah" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
      const safeName = String(fileName).replace(/[^A-Za-z0-9._-]/g, "_");
      const head = "--" + boundary + '\r\nContent-Disposition: form-data; name="audio"; filename="' + safeName + '"\r\nContent-Type: application/octet-stream\r\n\r\n';
      const tail = "\r\n--" + boundary + "--\r\n";
      const headB = asciiBytes(head);
      const tailB = asciiBytes(tail);
      const body = new Uint8Array(headB.length + fileBytes.length + tailB.length);
      body.set(headB, 0);
      body.set(fileBytes, headB.length);
      body.set(tailB, headB.length + fileBytes.length);
      return { body, contentType: "multipart/form-data; boundary=" + boundary };
    }
    function postConvertSound(bodyBytes, contentType, onDone) {
      try {
        let uwrModule = null;
        try {
          uwrModule = Il2Cpp.domain.assembly("UnityEngine.UnityWebRequestModule").image;
        } catch (e) {
        }
        if (!uwrModule) {
          onDone(false, null);
          return;
        }
        const uwrClass = uwrModule.class("UnityEngine.Networking.UnityWebRequest");
        const bodyArr = soundBytesToIl2CppArray(bodyBytes);
        const upCls = uwrModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const upInst = upCls.alloc();
        upInst.method(".ctor", ["System.Byte[]"]).invoke(bodyArr);
        const dlCls = uwrModule.class("UnityEngine.Networking.DownloadHandlerBuffer");
        const dlInst = dlCls.alloc();
        dlInst.method(".ctor").invoke();
        const req = uwrClass.method(".ctor", ["System.String", "System.String", "UnityEngine.Networking.DownloadHandler", "UnityEngine.Networking.UploadHandler"]).invoke(Il2Cpp.string(soundConvertUrl), Il2Cpp.string("POST"), dlInst, upInst);
        try {
          req.method("SetRequestHeader").invoke(Il2Cpp.string("Content-Type"), Il2Cpp.string(contentType));
        } catch (e) {
        }
        try {
          req.method("set_timeout").invoke(30);
        } catch (e) {
        }
        req.method("SendWebRequest").invoke();
        let attempts = 0;
        const poll = () => {
          attempts++;
          try {
            if (req.method("get_isDone").invoke()) {
              let code = -1;
              try {
                code = req.method("get_responseCode").invoke();
              } catch (e) {
              }
              if (code === 200) {
                const dh = req.method("get_downloadHandler").invoke();
                const data = dh.method("get_data").invoke();
                const n = data.length;
                const bytes = new Uint8Array(n);
                try {
                  const raw = new Uint8Array(data.elements.handle.readByteArray(n));
                  bytes.set(raw);
                } catch (e) {
                  for (let i = 0; i < n; i++)
                    bytes[i] = data.get(i);
                }
                onDone(true, bytes);
              } else {
                onDone(false, null);
              }
              return;
            }
            if (attempts > 600) {
              onDone(false, null);
              return;
            }
            setTimeout(poll, 50);
          } catch (e) {
            onDone(false, null);
          }
        };
        setTimeout(poll, 50);
      } catch (e) {
        onDone(false, null);
      }
    }
    function readFileBytesRaw(filePath) {
      try {
        const FileClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.File");
        const fileBytes = FileClass.method("ReadAllBytes", 1).invoke(Il2Cpp.string(filePath));
        if (fileBytes && !fileBytes.isNull()) {
          return new Uint8Array(fileBytes.elements.handle.readByteArray(fileBytes.length));
        }
      } catch (e) {
      }
      return null;
    }
    function loadSoundFile(filePath, onDone) {
      try {
        const ext = getFileExtension(filePath).toLowerCase();
        let buffer = readFileBytesRaw(filePath);
        if (!buffer || buffer.length === 0)
          buffer = libcReadFileBytes(filePath);
        if (!buffer || buffer.length === 0) {
          onDone(null);
          return;
        }
        if (ext === "wav") {
          onDone(parseWavBuffer(filePath, buffer));
          return;
        }
        if (ext !== "mp3") {
          onDone(null);
          return;
        }
        const mp = buildMultipartBody(buffer, String(filePath).split(/[\\/]/).pop() || "audio.mp3");
        postConvertSound(mp.body, mp.contentType, (ok, pcm) => {
          onDone(ok && pcm ? parsePcmBuffer(filePath, pcm) : null);
        });
      } catch (e) {
        onDone(null);
      }
    }
    function waveMagicOk(view) {
      try {
        return view.getUint32(0, true) === 1179011410 && view.getUint32(8, true) === 1163280727;
      } catch (_) {
        return false;
      }
    }
    function playLoadedSoundData(filePath, soundData) {
      const recorder = getRecorder();
      if (!recorder || recorder.isNull()) {
        return;
      }
      try {
        try {
          recorder.method("StopRecording").invoke();
        } catch (e) {
        }
        try {
          recorder.method("set_SourceType").invoke(1);
        } catch (e) {
        }
        const clipSet = { ok: true, err: "" };
        try {
          recorder.method("set_AudioClip").invoke(soundData.clip);
        } catch (e) {
          clipSet.ok = false;
          clipSet.err = String(e);
        }
        try {
          recorder.method("set_LoopAudioClip").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_TransmitEnabled").invoke(true);
        } catch (e) {
        }
        try {
          recorder.method("set_RecordingEnabled").invoke(true);
        } catch (e) {
        }
        try {
          recorder.method("set_ReliableMode").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_VoiceDetection").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_StopRecordingWhenPaused").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_DebugEchoMode").invoke(hearMyselfEnabled);
        } catch (e) {
        }
        if (loudMicEnabled) {
          try {
            recorder.method("set_Bitrate").invoke(192e3);
          } catch (e) {
          }
          try {
            recorder.method("set_SamplingRate").invoke(48e3);
          } catch (e) {
          }
        }
        if (!clipSet.ok) {
          return;
        }
        restartRecorder(recorder);
        try {
          recorder.method("StartRecording").invoke();
        } catch (e) {
          return;
        }
        isPlayingSound = true;
        soundEndTime = time + soundData.duration + 0.1;
        currentPlayingClip = soundData.clip;
      } catch (e) {
      }
    }
    function playSound(filePath) {
      if (isPlayingSound)
        stopSound();
      loadSoundFile(filePath, (sd) => {
        if (sd)
          playLoadedSoundData(filePath, sd);
      });
    }
    let libcOpen = null;
    let libcRead = null;
    let libcLseek = null;
    let libcClose = null;
    let libcOpendir = null;
    let libcReaddir = null;
    let libcClosedir = null;
    function ensureLibc() {
      if (libcOpen)
        return true;
      try {
        const libcMod = Process.findModuleByName("libc.so");
        if (!libcMod)
          return false;
        const exp = (name) => {
          try {
            const p = libcMod.findExportByName(name);
            return p && !p.isNull() ? p : null;
          } catch (_) {
            return null;
          }
        };
        libcOpen = new NativeFunction(exp("open") || NULL, "int", ["pointer", "int"]);
        libcRead = new NativeFunction(exp("read") || NULL, "long", ["int", "pointer", "ulong"]);
        libcLseek = new NativeFunction(exp("lseek64") || NULL, "long", ["int", "long", "int"]);
        if (libcLseek.isNull())
          libcLseek = new NativeFunction(exp("lseek") || NULL, "long", ["int", "long", "int"]);
        libcClose = new NativeFunction(exp("close") || NULL, "int", ["int"]);
        libcOpendir = new NativeFunction(exp("opendir") || NULL, "pointer", ["pointer"]);
        libcReaddir = new NativeFunction(exp("readdir64") || NULL, "pointer", ["pointer"]);
        if (libcReaddir.isNull())
          libcReaddir = new NativeFunction(exp("readdir") || NULL, "pointer", ["pointer"]);
        libcClosedir = new NativeFunction(exp("closedir") || NULL, "int", ["pointer"]);
        return !libcOpen.isNull();
      } catch (e) {
        return false;
      }
    }
    function libcReadFileBytes(filePath) {
      try {
        if (!ensureLibc()) {
          return null;
        }
        const path = Memory.allocUtf8String(filePath);
        const fd = libcOpen(path, 0);
        if (fd < 0) {
          return null;
        }
        const size = Number(libcLseek(fd, 0, 2));
        if (size <= 0) {
          return null;
        }
        libcLseek(fd, 0, 0);
        const buf = Memory.alloc(size);
        const got = Number(libcRead(fd, buf, size));
        libcClose(fd);
        if (got <= 0) {
          return null;
        }
        return new Uint8Array(buf.readByteArray(got));
      } catch (e) {
        return null;
      }
    }
    function libcListWavs(dir) {
      const out = [];
      try {
        if (!ensureLibc())
          return out;
        const dirHandle = libcOpendir(Memory.allocUtf8String(dir));
        if (dirHandle.isNull())
          return out;
        for (; ; ) {
          const entry = libcReaddir(dirHandle);
          if (entry.isNull())
            break;
          const d_name = entry.add(19).readUtf8String();
          if (!d_name)
            continue;
          if (d_name === "." || d_name === "..")
            continue;
          if (d_name.toLowerCase().endsWith(".wav") || d_name.toLowerCase().endsWith(".mp3"))
            out.push(dir + "/" + d_name);
        }
        libcClosedir(dirHandle);
      } catch (e) {
      }
      return out;
    }
    function writeTextFile(path, lines) {
      try {
        const f = new File(path, "w");
        f.write(lines.join("\n"));
        f.flush();
        f.close();
        return true;
      } catch (e) {
        return false;
      }
    }
    let dumpDir = null;
    function getDumpDir() {
      if (dumpDir != null)
        return dumpDir;
      try {
        const AppClass = UnityEngineCore.class("UnityEngine.Application");
        const pdp = String(AppClass.method("get_persistentDataPath").invoke()?.content ?? "");
        if (pdp) {
          dumpDir = pdp + "/";
          return dumpDir;
        }
      } catch (e) {
      }
      dumpDir = "/sdcard/Android/data/com.AnotherAxiom.LethalApe/files/";
      return dumpDir;
    }
    function dumpIl2CppAll() {
      sendNotification("Dumping il2cpp...", false, 10);
      try {
        const dir = getDumpDir();
        Il2Cpp.dump("lar_dump.cs", dir);
        sendNotification("Saved lar_dump.cs!", false, 10);
      } catch (e) {
        sendNotification("Dump failed: " + e, false, 10);
      }
    }
    function dumpPhotonPrefabs() {
      try {
        if (!PhotonUnityNetworking) {
          return;
        }
        const PhotonViewClass = PhotonUnityNetworking.class("Photon.Pun.PhotonView");
        const allPVs = Resources.method("FindObjectsOfTypeAll").overload("System.Type").invoke(PhotonViewClass.type.object);
        const lines = [];
        lines.push("Total PhotonViews found: " + allPVs.length);
        const unique = /* @__PURE__ */ new Set();
        for (let i = 0; i < allPVs.length; i++) {
          try {
            const view = allPVs.get(i);
            if (!view || view.isNull())
              continue;
            const go = view.method("get_gameObject").invoke();
            if (!go || go.isNull())
              continue;
            const name = go.method("get_name").invoke().toString();
            unique.add(String(name));
          } catch (e) {
          }
        }
        unique.forEach((name) => lines.push(name));
        const path = getDumpDir() + "lar_prefabs.txt";
        const ok = writeTextFile(path, lines);
        sendNotification(ok ? "Prefabs saved!" : "Prefab dump failed!", false, 8);
      } catch (e) {
        sendNotification("Prefab dump failed: " + e, false, 8);
      }
    }
    function dumpAssemblies() {
      try {
        const lines = [];
        for (const asm of Il2Cpp.domain.assemblies) {
          try {
            lines.push(String(asm.name) + " : " + String(asm.image.classes.length) + " classes");
          } catch (_) {
            lines.push(String(asm));
          }
        }
        const path = getDumpDir() + "lar_assemblies.txt";
        const ok = writeTextFile(path, lines);
        sendNotification(ok ? "Assemblies saved!" : "Assembly dump failed", false, 8);
      } catch (e) {
      }
    }
    function getPotentialSoundDirs() {
      const dirs = [];
      try {
        const AppClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Application");
        try {
          const pdp = String(AppClass.method("get_persistentDataPath").invoke()?.content ?? "");
          if (pdp)
            dirs.push(pdp + "/sounds");
        } catch (e) {
        }
        try {
          const dp = String(AppClass.method("get_dataPath").invoke()?.content ?? "");
          if (dp) {
            const exeDir = dp.replace(/[\\/][^\\/]*$/, "").replace(/[\\/][^\\/]*_Data$/, "");
            if (exeDir && exeDir !== dp)
              dirs.push(exeDir + "/sounds");
          }
        } catch (e) {
        }
        try {
          const id = String(AppClass.method("get_identifier").invoke()?.content ?? "");
          if (id)
            dirs.push("/sdcard/Android/data/" + id + "/files/sounds");
        } catch (e) {
        }
      } catch (e) {
      }
      return dirs;
    }
    function rebuildSoundboardButtons() {
      const soundboardButtons = [
        new ButtonInfo({
          buttonText: "Exit Soundboard",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
            reloadMenu();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Reload Sounds",
          method: () => {
            const files = scanSoundFiles();
            fullSoundList = files;
            soundsPreloadedOnce = true;
            preloadStartTime = Date.now();
            preloadSounds(files, 0);
            sendNotification("Reloading " + files.length + " sounds...", false, 2);
            rebuildSoundboardButtons();
            reloadMenu();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Stop All",
          method: () => {
            stopSound();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Hear Myself",
          method: () => {
          },
          enableMethod: () => {
            hearMyselfEnabled = true;
            toggleHearMyself(true);
            reloadMenu();
          },
          disableMethod: () => {
            hearMyselfEnabled = false;
            toggleHearMyself(false);
            reloadMenu();
          },
          isTogglable: true,
          enabled: hearMyselfEnabled
        }),
        new ButtonInfo({
          buttonText: "Loud Mic",
          method: () => {
          },
          enableMethod: () => {
            loudMicEnabled = true;
            applyLoudMic(true);
            reloadMenu();
          },
          disableMethod: () => {
            loudMicEnabled = false;
            applyLoudMic(false);
            reloadMenu();
          },
          isTogglable: true,
          enabled: loudMicEnabled
        })
      ];
      const scannedFiles = scanSoundFiles();
      if (scannedFiles.length === 0) {
        const tipDir = getPotentialSoundDirs()[0] || "sounds/";
        try {
          Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.Directory").method("CreateDirectory", 1).invoke(Il2Cpp.string(tipDir));
        } catch (e) {
        }
        soundboardButtons.push(new ButtonInfo({
          buttonText: "No sounds found",
          method: () => {
          },
          isTogglable: false
        }));
      } else {
        for (const filePath of scannedFiles) {
          const nameOnly = getFileNameWithoutExtension(filePath);
          soundboardButtons.push(new ButtonInfo({
            buttonText: nameOnly,
            method: () => {
              if (soundboardArmed === filePath) {
                soundboardArmed = null;
                const cached = soundboardCache.get(filePath);
                if (cached) {
                  playLoadedSoundData(filePath, cached);
                } else {
                  loadSoundFile(filePath, (sd) => {
                    if (sd) {
                      soundboardCache.set(filePath, sd);
                      playLoadedSoundData(filePath, sd);
                    }
                  });
                }
              } else {
                soundboardArmed = null;
                if (soundboardCache.has(filePath)) {
                  soundboardArmed = filePath;
                } else {
                  loadSoundFile(filePath, (sd) => {
                    if (sd) {
                      soundboardCache.set(filePath, sd);
                      soundboardArmed = filePath;
                    }
                  });
                }
              }
            },
            isTogglable: false
          }));
        }
      }
      buttons[14] = soundboardButtons;
      rebuildButtonMap();
      fullSoundList = scannedFiles;
    }
    function scanSoundFiles() {
      const scanned = [];
      try {
        const DirClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.Directory");
        const dirs = getPotentialSoundDirs();
        for (const dir of dirs) {
          let got = [];
          try {
            const exists = DirClass.method("Exists", 1).invoke(Il2Cpp.string(dir));
            if (!exists)
              continue;
            try {
              const files = DirClass.method("GetFiles", 2).invoke(Il2Cpp.string(dir), Il2Cpp.string("*.wav"));
              if (files && !files.isNull()) {
                for (let i = 0; i < files.length; i++) {
                  const fp = String(files.get(i)?.content ?? files.get(i)?.toString?.() ?? "");
                  const ext = getFileExtension(fp);
                  if (ext === "wav" || ext === "WAV")
                    got.push(fp);
                }
              }
            } catch (e) {
              got = libcListWavs(dir);
            }
            try {
              const mfiles = DirClass.method("GetFiles", 2).invoke(Il2Cpp.string(dir), Il2Cpp.string("*.mp3"));
              if (mfiles && !mfiles.isNull()) {
                for (let i = 0; i < mfiles.length; i++) {
                  const fp = String(mfiles.get(i)?.content ?? mfiles.get(i)?.toString?.() ?? "");
                  const ext = getFileExtension(fp);
                  if (ext === "mp3" || ext === "MP3")
                    got.push(fp);
                }
              }
            } catch (e) {
            }
            if (got.length === 0)
              got = libcListWavs(dir);
            for (const fp of got)
              scanned.push(fp);
            if (scanned.length > 0)
              break;
          } catch (e) {
          }
        }
      } catch (e) {
      }
      return scanned;
    }
    let soundsPreloadedOnce = false;
    let preloadStartTime = 0;
    function preloadAllSoundsOnce() {
      if (soundsPreloadedOnce)
        return;
      soundsPreloadedOnce = true;
      try {
        const files = scanSoundFiles();
        fullSoundList = files;
        if (files.length > 0) {
          preloadStartTime = Date.now();
          preloadSounds(files, 0);
        }
      } catch (e) {
      }
    }
    let preloadScheduled = false;
    function scheduleSoundPreload() {
      if (preloadScheduled)
        return;
      preloadScheduled = true;
      let tries = 0;
      const tryGo = () => {
        tries++;
        try {
          const cc = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          const cam = cc.method("get_main").invoke();
          if (cam && !cam.isNull()) {
            preloadAllSoundsOnce();
            return;
          }
        } catch (e) {
        }
        if (tries >= 40) {
          preloadAllSoundsOnce();
          return;
        }
        setTimeout(tryGo, 1e3);
      };
      setTimeout(tryGo, 1e4);
    }
    scheduleSoundPreload();
    let preloadCompleted = 0;
    let preloadInFlight = 0;
    let preloadDoneAnnounced = false;
    const preloadConcurrency = 8;
    function preloadSounds(files, nextIndex) {
      if (nextIndex === 0) {
        preloadCompleted = 0;
        preloadInFlight = 0;
        preloadDoneAnnounced = false;
      }
      const launch = () => {
        while (preloadInFlight < preloadConcurrency && nextIndex < files.length) {
          const filePath = files[nextIndex];
          nextIndex++;
          preloadInFlight++;
          const doneOne = () => {
            preloadCompleted++;
            preloadInFlight--;
            if (preloadCompleted % 10 === 0 || preloadCompleted === files.length) {
              const elapsed = Math.max(1, Date.now() - preloadStartTime);
              const per = elapsed / preloadCompleted;
              const remaining = files.length - preloadCompleted;
              const etaSec = Math.ceil(per * remaining / 1e3);
              sendNotification("Preloading " + preloadCompleted + "/" + files.length + " sounds... ETA ~" + etaSec + "s", false, 2);
            }
            if (preloadCompleted >= files.length) {
              if (!preloadDoneAnnounced) {
                preloadDoneAnnounced = true;
                const elapsed = Math.max(1, Date.now() - preloadStartTime);
                const totalSec = (elapsed / 1e3).toFixed(1);
                console.log("[dbg] preload done " + files.length + " files in " + totalSec + "s");
                sendNotification("All " + files.length + " sounds preloaded in " + totalSec + "s", false);
              }
            } else if (nextIndex < files.length) {
              launch();
            }
          };
          if (soundboardCache.has(filePath)) {
            doneOne();
          } else {
            try {
              loadSoundFile(filePath, (sd) => {
                if (sd)
                  soundboardCache.set(filePath, sd);
                doneOne();
              });
            } catch (e) {
              doneOne();
            }
          }
        }
      };
      launch();
    }
    function normalizeSoundName(name) {
      return String(name).replace(/["']/g, "").trim().toLowerCase();
    }
    function findClipByName(desired) {
      try {
        const want = normalizeSoundName(desired);
        if (AudioSourceClass == null) {
          return null;
        }
        const check = (as) => {
          try {
            if (as == null || as.isNull())
              return null;
            const clip = as.method("get_clip").invoke();
            if (clip == null || clip.isNull())
              return null;
            const cn = String(clip.method("get_name").invoke().toString());
            const ncn = normalizeSoundName(cn);
            if (ncn === want || ncn.indexOf(want) !== -1) {
              cachedClickClip = clip;
              if (cachedClickSource == null || cachedClickSource.isNull())
                cachedClickSource = as;
              return clip;
            }
          } catch (e) {
          }
          return null;
        };
        const allSources = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(AudioSourceClass.type.object, true);
        if (allSources != null) {
          for (let ai = 0; ai < allSources.length; ai++) {
            const r = check(allSources.get(ai));
            if (r != null && !r.isNull())
              return r;
          }
        }
      } catch (e) {
      }
      return null;
    }
    function scanForClickClip() {
      const clickCandidates = ["sparkerl", "startsparkel", "click", "cash-register-kaching-sound-effect-125042"];
      for (const candidate of clickCandidates) {
        const clip = findClipByName(candidate);
        if (clip != null && !clip.isNull()) {
          return clip;
        }
      }
      return null;
    }
    function playClickSound() {
      try {
        try {
          const larm = getLarMenu();
          if (larm != null && !larm.isNull()) {
            const clip = larm.field("buttonClickClip").value;
            if (clip != null && !clip.isNull()) {
              try {
                larm.method("PlayClip").invoke(clip);
                return true;
              } catch (e) {
              }
            }
          }
        } catch (e) {
        }
        if (cachedClickClip == null || cachedClickClip.isNull()) {
          const clip = scanForClickClip();
          if (clip == null || clip.isNull())
            return false;
          cachedClickClip = clip;
        }
        let src = getSoundPreviewSource();
        if (src == null || src.isNull())
          return false;
        try {
          src.method("get_gameObject").invoke().method("SetActive").invoke(true);
        } catch (e) {
        }
        try {
          src.method("set_enabled").invoke(true);
        } catch (e) {
        }
        try {
          src.method("Stop", 0).invoke();
        } catch (e) {
        }
        src.method("set_clip").invoke(cachedClickClip);
        src.method("set_time").invoke(0);
        src.method("set_volume").invoke(1);
        src.method("set_spatialBlend").invoke(0);
        src.method("set_loop").invoke(false);
        src.method("set_mute").invoke(false);
        let ok = false;
        try {
          src.method("Play").invoke();
          ok = true;
        } catch (e) {
          try {
            src.method("Play", 0).invoke();
            ok = true;
          } catch (e2) {
            try {
              src.method("Play", 0).invoke();
              ok = true;
            } catch (e3) {
            }
          }
        }
        if (!ok) {
          try {
            soundPreviewSource = null;
          } catch (e) {
          }
          const fresh = getSoundPreviewSource();
          if (fresh != null && !fresh.isNull()) {
            try {
              fresh.method("set_clip").invoke(cachedClickClip);
            } catch (e) {
            }
            try {
              fresh.method("set_volume").invoke(1);
            } catch (e) {
            }
            try {
              fresh.method("set_spatialBlend").invoke(0);
            } catch (e) {
            }
            try {
              fresh.method("set_mute").invoke(false);
            } catch (e) {
            }
            try {
              fresh.method("Play").invoke();
            } catch (e) {
            }
          }
        }
        return true;
      } catch (e) {
        return false;
      }
    }
    function playNamedClip(clipName) {
      try {
        const clip = findClipByName(clipName);
        if (clip == null || clip.isNull()) {
          return false;
        }
        let src = getSoundPreviewSource();
        if (src == null || src.isNull()) {
          return false;
        }
        try {
          src.method("Stop", 0).invoke();
        } catch (e) {
        }
        src.method("set_clip").invoke(clip);
        src.method("set_time").invoke(0);
        src.method("set_volume").invoke(1);
        src.method("set_spatialBlend").invoke(0);
        src.method("set_loop").invoke(false);
        src.method("set_mute").invoke(false);
        src.method("set_enabled").invoke(true);
        try {
          src.method("Play").invoke();
        } catch (e) {
          try {
            src.method("Play", 0).invoke();
          } catch (e2) {
            return false;
          }
        }
        return true;
      } catch (e) {
        return false;
      }
    }
    function dumpAllSounds() {
      const seen = /* @__PURE__ */ new Set();
      try {
        if (AudioSourceClass != null) {
          const scanList = (list) => {
            for (let ai = 0; ai < list.length; ai++) {
              try {
                const as = list.get(ai);
                if (as == null || as.isNull())
                  continue;
                const clip = as.method("get_clip").invoke();
                if (clip == null || clip.isNull())
                  continue;
                const cn = String(clip.method("get_name").invoke().toString());
                const go = as.method("get_gameObject").invoke();
                const gn = go != null && !go.isNull() ? String(go.method("get_name").invoke().toString()) : "?";
                const key = cn + "|" + gn;
                if (seen.has(key))
                  continue;
                seen.add(key);
                console.log('[SOUND] clip="' + cn + '" on="' + gn + '"');
              } catch (e) {
              }
            }
          };
          const allAs = findObjectsOfType(AudioSourceClass);
          if (allAs != null)
            scanList(allAs);
          const allInactive = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(AudioSourceClass.type.object, true);
          if (allInactive != null)
            scanList(allInactive);
        }
      } catch (e) {
      }
      return seen.size;
    }
    function rejoinRoom() {
      Il2Cpp.perform(() => {
        try {
          let roomName = null;
          try {
            const cr = PhotonNetwork.method("get_CurrentRoom").invoke();
            if (cr != null && !cr.isNull())
              roomName = cr.method("get_Name").invoke();
          } catch (e) {
          }
          if (roomName == null || roomName.isNull() || !roomName.content) {
            sendNotification("No room to rejoin", false, 3);
            return;
          }
          const ok = PhotonNetwork.method("RejoinRoom", 1).invoke(roomName);
          sendNotification(ok ? "Rejoining " + roomName.content : "Rejoin failed", false, 3);
        } catch (e) {
          sendNotification("Rejoin error", false, 3);
        }
      });
    }
    function disconnectRoom() {
      Il2Cpp.perform(() => {
        try {
          PhotonNetwork.method("Disconnect").invoke();
          sendNotification("Disconnected", false, 3);
        } catch (e) {
          sendNotification("Disconnect failed", false, 3);
        }
      });
    }
    function joinRandomRoom() {
      Il2Cpp.perform(() => {
        try {
          if (PhotonVRManagerClass != null) {
            try {
              PhotonVRManagerClass.method("JoinRandomRoom").invoke(10);
              sendNotification("Joining random room...", false, 3);
              return;
            } catch (e) {
            }
          }
          const ok = PhotonNetwork.method("JoinRandomRoom", 0).invoke();
          console.log("[NET] JoinRandomRoom -> " + ok);
          sendNotification(ok ? "Joining random room..." : "JoinRandom failed", false, 3);
        } catch (e) {
          sendNotification("JoinRandom error", false, 3);
        }
      });
    }
    function getCorlibClassByName(name) {
      try {
        const c = Il2Cpp.corlib.class(name);
        if (c != null)
          return c;
      } catch (e) {
      }
      for (const asm of Il2Cpp.domain.assemblies) {
        try {
          const c = asm.image.class(name);
          if (c != null)
            return c;
        } catch (e) {
        }
      }
      return null;
    }
    function dumpAllAudioWavs() {
      const seen = /* @__PURE__ */ new Set();
      try {
        if (AudioSourceClass == null) {
          console.log("[SOUND] AudioSourceClass is null");
          return 0;
        }
        const allSources = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(AudioSourceClass.type.object, true);
        if (allSources == null || allSources.length == 0) {
          console.log("[SOUND] No AudioSources found");
          return 0;
        }
        console.log("[SOUND] Found " + allSources.length + " AudioSources");
        for (let i = 0; i < allSources.length; i++) {
          try {
            const audioSource = allSources.get(i);
            if (audioSource == null || audioSource.isNull())
              continue;
            const clip = audioSource.method("get_clip").invoke();
            if (clip == null || clip.isNull())
              continue;
            const clipName = String(clip.method("get_name").invoke().toString());
            const gameObject = audioSource.method("get_gameObject").invoke();
            const goName = gameObject != null && !gameObject.isNull() ? String(gameObject.method("get_name").invoke().toString()) : "?";
            const key = clipName + "|" + goName;
            if (seen.has(key))
              continue;
            seen.add(key);
            console.log('[SOUND] clip="' + clipName + '" on="' + goName + '"');
          } catch (e) {
          }
        }
        console.log("[SOUND] Total unique sounds found: " + seen.size);
      } catch (e) {
        console.log("[SOUND] Error:", e);
      }
      return seen.size;
    }
    function ensureClickClip() {
      let tries = 0;
      const tryScan = () => {
        tries++;
        try {
          if (scanForClickClip() != null)
            return;
        } catch (e) {
        }
        if (tries < 60)
          setTimeout(tryScan, 1e3);
      };
      setTimeout(tryScan, 1e3);
    }
    ensureClickClip();
    function handleMenuButtonClick(goName) {
      const _time = Time.method("get_time").invoke();
      if (_time <= buttonClickDelay)
        return;
      buttonClickDelay = _time + 0.2;
      const button = getIndex(goName);
      if (button) {
        try {
          playClickSound();
        } catch (e) {
        }
        try {
          const prevCat = currentCategory, prevPage = currentPage;
          if (button.isTogglable) {
            button.enabled = !button.enabled;
            if (button.enabled) {
              if (button.toolTip)
                sendNotification("[ENABLE] " + button.toolTip, false);
              if (button.enableMethod) {
                try {
                  button.enableMethod();
                } catch (ee) {
                }
              }
            } else {
              if (button.toolTip)
                sendNotification("[DISABLE] " + button.toolTip, false);
              if (button.disableMethod) {
                try {
                  button.disableMethod();
                } catch (ee) {
                }
              }
            }
          } else {
            if (button.toolTip)
              sendNotification(button.toolTip, false);
            if (button.method) {
              try {
                button.method();
              } catch (ee) {
              }
            }
          }
          if (button.isTogglable || prevCat !== currentCategory || prevPage !== currentPage)
            reloadMenu();
        } catch (e) {
        }
      }
    }
    if (BaseButtonClass != null) {
      const ButtonActivation = BaseButtonClass.method("OnTriggerEnter");
      ButtonActivation.implementation = function(collider) {
        const rawName = this.method("get_name").invoke().toString();
        if (rawName.length > 1 && rawName[0] == "@") {
          if (referenceCollider != null && !referenceCollider.isNull() && collider.handle.equals(referenceCollider.handle)) {
            handleMenuButtonClick(rawName.substring(1));
            return;
          }
          return;
        }
        return this.method("OnTriggerEnter").invoke(collider);
      };
    }
    let commonUsageCache = null;
    let tryGetBoolOverload = null;
    let tryGetVec2Overload = null;
    let getDeviceAtXRNodeMethod = null;
    function updateInput() {
      try {
        if (commonUsageCache === null) {
          commonUsageCache = {};
          const names = ["primaryButton", "secondaryButton", "gripButton", "triggerButton", "primary2DAxisClick", "primary2DAxis"];
          for (const n of names) {
            try {
              commonUsageCache[n] = CommonUsages.field(n).value;
            } catch (e) {
            }
          }
          try {
            getDeviceAtXRNodeMethod = InputDevices.method("GetDeviceAtXRNode", 1);
          } catch (e) {
          }
          try {
            const d = getDeviceAtXRNodeMethod.invoke(4);
            if (d != null && !d.isNull()) {
              tryGetBoolOverload = d.method("TryGetFeatureValue", 2);
              tryGetVec2Overload = d.method("TryGetFeatureValue", 2).overload("UnityEngine.XR.InputFeatureUsage<UnityEngine.Vector2>", "UnityEngine.Vector2&");
            }
          } catch (e) {
          }
        }
        const leftDevice = getDeviceAtXRNodeMethod.invoke(4);
        const rightDevice = getDeviceAtXRNodeMethod.invoke(5);
        if (leftDevice == null || leftDevice.isNull() || rightDevice == null || rightDevice.isNull())
          return;
        const outBool = outBoolBuf === null ? outBoolBuf = Il2Cpp.alloc(1) : outBoolBuf;
        const t = tryGetBoolOverload;
        if (t == null)
          return;
        t.invoke(commonUsageCache["primaryButton"], outBool);
        leftPrimary = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["secondaryButton"], outBool);
        leftSecondary = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["gripButton"], outBool);
        leftGrab = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["triggerButton"], outBool);
        leftTrigger = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["primary2DAxisClick"], outBool);
        leftStick = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["primaryButton"], outBool);
        rightPrimary = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["secondaryButton"], outBool);
        rightSecondary = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["triggerButton"], outBool);
        rightTrigger = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["gripButton"], outBool);
        rightGrab = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["primary2DAxisClick"], outBool);
        rightStick = outBool.readU8() !== 0;
        const v = tryGetVec2Overload;
        v.invoke(commonUsageCache["primary2DAxis"], ensureOutAxis());
        rightAxis = [outAxis.readFloat(), outAxis.add(4).readFloat()];
        v.invoke(commonUsageCache["primary2DAxis"], ensureOutAxis());
        leftAxis = [outAxis.readFloat(), outAxis.add(4).readFloat()];
      } catch (e) {
      }
    }
    if (PlayerClass) {
      PlayerClass.method("Update").implementation = function() {
        GTPlayer = this;
        try {
          leftHandTransform = this.field("leftHandTransform").value;
          rightHandTransform = this.field("rightHandTransform").value;
          headCollider = this.field("headCollider").value;
          bodyCollider = this.field("bodyCollider").value;
        } catch (_) {
        }
        if (!UberShader || UberShader.isNull()) {
          try {
            UberShader = Shader.method("Find").invoke(Il2Cpp.string("Universal Render Pipeline/Unlit"));
            if (!UberShader || UberShader.isNull()) {
              UberShader = Shader.method("Find").invoke(Il2Cpp.string("Unlit/Color"));
            }
            TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default"));
            if (!TextShader || TextShader.isNull()) {
              TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default (1)"));
            }
            zeroVector = Vector3.field("zeroVector").value;
            oneVector = Vector3.field("oneVector").value;
            identityQuaternion = Quaternion.field("identityQuaternion").value;
            try {
              arial = Resources.method("GetBuiltinResource").overload("System.Type", "System.String").invoke(Font.type.object, Il2Cpp.string("Arial.ttf"));
              if (!arial || arial.isNull()) {
                arial = Resources.method("GetBuiltinResource").overload("System.Type", "System.String").invoke(Font.type.object, Il2Cpp.string("LegacyRuntime.ttf"));
              }
            } catch (_) {
            }
            if (!arial || arial.isNull()) {
              try {
                const allFonts = Object.method("FindObjectsOfType").overload("System.Type").invoke(Font.type.object);
                if (allFonts != null) {
                  for (let fi = 0; fi < allFonts.length; fi++) {
                    try {
                      const f = allFonts.get(fi);
                      if (f != null && !f.isNull()) {
                        arial = f;
                        break;
                      }
                    } catch (e2) {
                    }
                  }
                }
              } catch (_) {
              }
            }
            if (!arial || arial.isNull()) {
              try {
                arial = Font.method("CreateDynamicFontFromOSFont", 2).invoke(Il2Cpp.string("Roboto"), 16);
              } catch (_) {
              }
            }
            if (!arial || arial.isNull()) {
              try {
                arial = Font.method("CreateDynamicFontFromOSFont", 2).invoke(Il2Cpp.string("sans-serif"), 16);
              } catch (_) {
              }
            }
          } catch (_) {
          }
        }
        deltaTime = Time.method("get_deltaTime").invoke();
        time = Time.method("get_time").invoke();
        if (menuInitTime === 0) {
          menuInitTime = time;
        }
        if (time - menuInitTime < 5) {
          this.method("Update").invoke();
          return;
        }
        updateInput();
        frameCount++;
        if (time - lastGameObjectRefresh > 5) {
          lastGameObjectRefresh = time;
          try {
            refreshGameObjects();
          } catch (e) {
          }
        }
        try {
          if (cachedHookPlayerHandle == null || cachedHookPlayerHandle !== this.handle) {
            cachedHookPlayerHandle = this.handle;
            try {
              refreshGameObjects();
            } catch (e) {
            }
          }
        } catch (e) {
        }
        if (spamSpawnOn && time - lastFunnelApply > 0.25) {
          lastFunnelApply = time;
          try {
            const l = getLarMenu();
            if (l != null && !l.isNull()) {
              if (spamSpawnMethod === null) {
                try {
                  spamSpawnMethod = l.method("Handle_SpamSpawn");
                } catch (e) {
                }
              }
              if (spamSpawnMethod != null)
                spamSpawnMethod.invoke();
            }
          } catch (e) {
          }
        }
        if (agFunnelOn && time - lastFunnelApply > 0.25) {
          lastFunnelApply = time;
          try {
            const l = getLarMenu();
            if (l != null && !l.isNull()) {
              if (agFunnelMethod === null) {
                try {
                  agFunnelMethod = l.method("Handle_AgFunnel");
                } catch (e) {
                }
              }
              if (agFunnelMethod != null)
                agFunnelMethod.invoke();
            }
          } catch (e) {
          }
        }
        if (espOn && time - lastEspApply > 0.25) {
          lastEspApply = time;
          try {
            const l = getLarMenu();
            if (l != null && !l.isNull()) {
              if (espMethod === null) {
                try {
                  espMethod = l.method("Handle_Visuals");
                } catch (e) {
                }
              }
              if (espMethod != null)
                espMethod.invoke();
            }
          } catch (e) {
          }
        }
        if (rgbColorEnabled && time - lastRgbApply > 0.25) {
          lastRgbApply = time;
          try {
            setLocalColor(hsvToRgb(time * 90 % 360, 1, 1));
          } catch (e) {
          }
        }
        if (hearMyselfEnabled && time - lastHearMyselfApply > 1) {
          lastHearMyselfApply = time;
          try {
            applyHearMyself();
          } catch (e) {
          }
        }
        if (hearMyselfEnabled && time - lastHearMyselfDump > 5) {
          lastHearMyselfDump = time;
          try {
            const r = getRecorder();
            dumpRecorderState(r, "periodic");
          } catch (e) {
            console.log("[VOICE] periodic dump error: " + e);
          }
        }
        if (strobeEnabled && time - lastStrobeTime > 0.1) {
          lastStrobeTime = time;
          const strobeState = Math.floor(time / 0.1) % 2;
          try {
            setLocalColor(hsvToRgb(0, 0, strobeState ? 1 : 0));
          } catch (e) {
          }
        }
        if (righthand && rightSecondary || !righthand && leftSecondary) {
          if (currentNotification != "" && time > notifactionResetTime)
            reloadMenu();
          if (menu == null) {
            try {
              renderMenu();
            } catch (e) {
              if (e.stack)
                try {
                  if (menu != null) {
                    Destroy(menu);
                  }
                } catch (e2) {
                }
              menu = null;
            }
          } else {
            try {
              if (frameCount % 2 === 0)
                recenterMenu();
            } catch (e) {
              if (e.stack) {
              }
            }
          }
        } else {
          if (menu != null) {
            try {
              Destroy(menu);
            } catch (e) {
            }
            menu = null;
          }
        }
        if (menu == null) {
          if (reference != null) {
            try {
              Destroy(reference);
            } catch (e) {
            }
            reference = null;
          }
        } else {
          if (reference == null) {
            try {
              renderReference();
            } catch (e) {
              if (e.stack) {
              }
            }
          }
        }
        try {
          if (menu != null && reference != null && !reference.isNull() && clickableButtons.length > 0) {
            const _time = Time.method("get_time").invoke();
            if (_time > buttonClickDelay && _time - lastClickScan > 0.05) {
              lastClickScan = _time;
              const refPos = getTransform(reference).method("get_position").invoke();
              let hits = null;
              try {
                hits = Physics.method("OverlapSphere", 4).invoke(refPos, 0.03, -1, 2);
              } catch (e6) {
              }
              if (hits != null && !hits.isNull()) {
                for (let hi = 0; hi < hits.length; hi++) {
                  try {
                    const hitCol = hits.get(hi);
                    if (hitCol == null || hitCol.isNull())
                      continue;
                    for (const cb of clickableButtons) {
                      try {
                        if (cb.collider != null && !cb.collider.isNull() && hitCol.handle.equals(cb.collider.handle)) {
                          handleMenuButtonClick(cb.name);
                          break;
                        }
                      } catch (e7) {
                      }
                    }
                    if (Time.method("get_time").invoke() <= buttonClickDelay)
                      break;
                  } catch (e8) {
                  }
                }
              }
            }
          }
        } catch (e5) {
        }
        try {
          frameFlingQueue();
        } catch (e) {
        }
        try {
          if (gunRenderedLastFrame) {
            gunRenderedLastFrame = false;
          } else {
            if (GunPointer != null) {
              if (!GunPointer.method("get_activeSelf").invoke()) {
                Destroy(GunPointer);
                GunPointer = null;
              } else
                GunPointer.method("SetActive").invoke(false);
            }
            if (GunLine != null) {
              let lineObj = GunLine.method("get_gameObject").invoke();
              if (lineObj != null) {
                if (!lineObj.method("get_activeSelf").invoke()) {
                  Destroy(lineObj);
                  GunLine = null;
                } else
                  lineObj.method("SetActive").invoke(false);
              }
            }
          }
        } catch {
        }
        if (menuCanvas && !menuCanvas.isNull()) {
          try {
            if (cameraClassCache === null) {
              try {
                cameraClassCache = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
              } catch (_) {
              }
            }
            if (cameraClassCache != null) {
              const mc = cameraClassCache.method("get_main").invoke();
              if (mc && !mc.isNull())
                menuCanvas.method("set_worldCamera").invoke(mc);
            }
          } catch (_) {
          }
        }
        buttons.flat().filter((b) => b.enabled).forEach((b) => {
          if (b.method) {
            try {
              b.method();
            } catch (e) {
              console.error(`[Update] Error in '${b.buttonText}':`, e);
            }
          }
        });
        this.method("Update").invoke();
        try {
          flyPostUpdate();
        } catch (e) {
        }
        try {
          flyAPostUpdate();
        } catch (e) {
        }
        try {
          rtFlyPostUpdate();
        } catch (e) {
        }
        try {
          longArmsPostUpdate();
        } catch (e) {
        }
      };
    } else {
    }
    console.log(`
                          _              
   _____  __   ___  _ __ | |_ ___  _ __  
  / _  / /  / _ | '_ | __/ _ | '_  
 |  __/>  <  | (_) | | | | || (_) | |_) |
  ___/_/_  ___/|_| |_|_____/| .__/ 
                                  |_|
        `);
  });
  Il2Cpp.perform(() => {
    try {
      let getUrlFromRequest2 = function(request) {
        if (!request || request.isNull())
          return "unknown";
        try {
          const stored = requestInfo.get(request.handle.toString());
          if (stored && stored.url)
            return stored.url;
        } catch (e) {
        }
        if (helpUrlAttribute) {
          try {
            const urlAttrFields = ["m_HelpURL", "helpURL", "m_Attribute", "attribute"];
            for (const fieldName of urlAttrFields) {
              try {
                const field = request.tryField(fieldName);
                if (field) {
                  const val = field.value;
                  if (val && !val.isNull()) {
                    try {
                      const urlField = val.tryField("m_Url");
                      if (urlField) {
                        const urlVal = urlField.value;
                        if (urlVal && !urlVal.isNull() && urlVal.content) {
                          return urlVal.content;
                        }
                      }
                    } catch (e) {
                    }
                    try {
                      const getUrlMethod = val.tryMethod("get_URL");
                      if (getUrlMethod && !getUrlMethod.virtualAddress.isNull()) {
                        const result = getUrlMethod.invoke();
                        if (result && !result.isNull() && result.content) {
                          return result.content;
                        }
                      }
                    } catch (e) {
                    }
                  }
                }
              } catch (e) {
              }
            }
          } catch (e) {
          }
        }
        const fieldNames = [
          "m_Uri",
          "uri",
          "url",
          "m_url",
          "_url",
          "m_Path",
          "path",
          "m_WebRequest",
          "webRequest",
          "m_Address",
          "address",
          "m_OriginalURL",
          "originalURL",
          "m_Url",
          "Url",
          "m_URL",
          "URL"
        ];
        for (const fieldName of fieldNames) {
          try {
            const field = request.tryField(fieldName);
            if (field) {
              const val = field.value;
              if (val && !val.isNull()) {
                if (val.content !== void 0) {
                  const content = val.content;
                  if (content && content.length > 0) {
                    if (content.includes("playfabapi.com") || content.includes("pythonanywhere.com") || content.startsWith("http://") || content.startsWith("https://")) {
                    }
                  }
                }
              }
            }
          } catch (e) {
          }
        }
        try {
          const method = request.tryMethod("get_url");
          if (method && !method.virtualAddress.isNull()) {
            const result = method.invoke();
            if (result && !result.isNull() && result.content) {
              return result.content;
            }
          }
        } catch (e) {
        }
        try {
          const handle = request.handle;
          for (let offset = 0; offset < 512; offset += 4) {
            try {
              const ptr = handle.add(offset).readPointer();
              if (!ptr.isNull()) {
                const str = ptr.readCString(256);
                if (str) {
                  if (str.includes("playfabapi.com") || str.includes("pythonanywhere.com") || str.startsWith("http://") || str.startsWith("https://")) {
                    const match = str.match(/https?:\/\/[^\s]+/);
                    if (match) {
                      return match[0];
                    }
                    return str;
                  }
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
        return "unknown";
      }, getMethod2 = function(request) {
        if (!request || request.isNull())
          return "UNKNOWN";
        try {
          const stored = requestInfo.get(request.handle.toString());
          if (stored && stored.method)
            return stored.method.toUpperCase();
        } catch (e) {
        }
        const methodFields = ["m_Method", "method", "_method", "m_HttpMethod", "httpMethod"];
        for (const fieldName of methodFields) {
          try {
            const field = request.tryField(fieldName);
            if (field) {
              const val = field.value;
              if (val && !val.isNull() && val.content) {
                return val.content.toUpperCase();
              }
            }
          } catch (e) {
          }
        }
        try {
          const method = request.tryMethod("get_method");
          if (method && !method.virtualAddress.isNull()) {
            const result = method.invoke();
            if (result && !result.isNull() && result.content) {
              return result.content.toUpperCase();
            }
          }
        } catch (e) {
        }
        try {
          const uploadField = request.tryField("m_UploadHandler") || request.tryField("uploadHandler");
          if (uploadField) {
            const upload = uploadField.value;
            if (upload && !upload.isNull()) {
              return "POST";
            }
          }
        } catch (e) {
        }
        return "GET";
      }, getRequestBody2 = function(uploadHandler) {
        if (!uploadHandler || uploadHandler.isNull())
          return null;
        try {
          const captured = uploadHandlerBody.get(uploadHandler.handle.toString());
          if (captured)
            return captured;
        } catch (e) {
        }
        try {
          const dataField = uploadHandler.tryField("m_Data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        try {
          const dataField = uploadHandler.tryField("data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        return null;
      }, getResponseBody2 = function(downloadHandler) {
        if (!downloadHandler || downloadHandler.isNull())
          return null;
        try {
          const getTextMethod = downloadHandler.tryMethod("get_text");
          if (getTextMethod && !getTextMethod.virtualAddress.isNull()) {
            const result = getTextMethod.invoke();
            if (result && !result.isNull()) {
              return result.content;
            }
          }
        } catch (e) {
        }
        try {
          const dataField = downloadHandler.tryField("m_Data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        return null;
      }, bytesToString2 = function(arr) {
        if (!arr || arr.isNull())
          return null;
        try {
          const n = arr.length;
          if (n === 0)
            return "";
          let s = "";
          for (let i = 0; i < n; i++) {
            const b = arr.get(i);
            s += String.fromCharCode(b);
          }
          return s;
        } catch (e) {
          return null;
        }
      }, getByteElementClass2 = function() {
        if (byteElementClass && !byteElementClass.isNull())
          return byteElementClass;
        const candidates = ["System.Private.CoreLib", "mscorlib", "System.Runtime", "netstandard"];
        for (const an of candidates) {
          try {
            const asm = Il2Cpp.domain.assembly(an);
            if (asm) {
              const k = asm.image.class("System.Byte");
              if (k) {
                byteElementClass = k;
                return k;
              }
            }
          } catch (e) {
          }
        }
        try {
          for (const asm of Il2Cpp.domain.assemblies) {
            try {
              const k = asm.image.class("System.Byte");
              if (k) {
                byteElementClass = k;
                return k;
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
        return null;
      }, strToBytes2 = function(str) {
        const cls = getByteElementClass2();
        if (!cls)
          throw new Error("could not resolve System.Byte class");
        const bytes = [];
        for (let i = 0; i < str.length; i++)
          bytes.push(str.charCodeAt(i) & 255);
        return Il2Cpp.array(cls, bytes);
      }, newUploadHandlerFromString2 = function(str) {
        const klass = unityWebRequestModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const inst = klass.alloc();
        const array = strToBytes2(str);
        inst.method(".ctor", ["System.Byte[]"]).invoke(array);
        return inst;
      };
      var getUrlFromRequest = getUrlFromRequest2, getMethod = getMethod2, getRequestBody = getRequestBody2, getResponseBody = getResponseBody2, bytesToString = bytesToString2, getByteElementClass = getByteElementClass2, strToBytes = strToBytes2, newUploadHandlerFromString = newUploadHandlerFromString2;
      let helpUrlAttribute = null;
      try {
        const coreModule = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image;
        helpUrlAttribute = coreModule.class("UnityEngine.HelpURLAttribute");
      } catch (e) {
      }
      let unityWebRequestModule = null;
      let unityWebRequest = null;
      let downloadHandlerBuffer = null;
      try {
        unityWebRequestModule = Il2Cpp.domain.assembly("UnityEngine.UnityWebRequestModule").image;
        unityWebRequest = unityWebRequestModule.class("UnityEngine.Networking.UnityWebRequest");
        downloadHandlerBuffer = unityWebRequestModule.class("UnityEngine.Networking.DownloadHandlerBuffer");
      } catch (e) {
      }
      if (!unityWebRequest || unityWebRequest.isNull())
        return;
      const requestData = /* @__PURE__ */ new Map();
      const requestInfo = /* @__PURE__ */ new Map();
      const uploadHandlerBody = /* @__PURE__ */ new Map();
      try {
        const setUrlMethod = unityWebRequest.tryMethod("set_url");
        if (setUrlMethod && !setUrlMethod.virtualAddress.isNull()) {
          setUrlMethod.implementation = function(urlVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.url = urlVal && !urlVal.isNull() ? urlVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("set_url").invoke(urlVal);
          };
        }
      } catch (e) {
      }
      try {
        const setMethodMethod = unityWebRequest.tryMethod("set_method");
        if (setMethodMethod && !setMethodMethod.virtualAddress.isNull()) {
          setMethodMethod.implementation = function(methodVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.method = methodVal && !methodVal.isNull() ? methodVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("set_method").invoke(methodVal);
          };
        }
      } catch (e) {
      }
      try {
        const internalSetUrl = unityWebRequest.tryMethod("InternalSetUrl");
        if (internalSetUrl && !internalSetUrl.virtualAddress.isNull()) {
          internalSetUrl.implementation = function(urlVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.url = urlVal && !urlVal.isNull() ? urlVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("InternalSetUrl").invoke(urlVal);
          };
        }
      } catch (e) {
      }
      const methodNames = ["GET", "POST", "PUT", "HEAD", "CREATE", "DELETE"];
      try {
        const setCustomMethod = unityWebRequest.tryMethod("SetCustomMethod");
        if (setCustomMethod && !setCustomMethod.virtualAddress.isNull()) {
          setCustomMethod.implementation = function(methodVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.method = methodVal && !methodVal.isNull() ? methodVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("SetCustomMethod").invoke(methodVal);
          };
        }
      } catch (e) {
      }
      try {
        const setMethodEnum = unityWebRequest.tryMethod("InternalSetMethod");
        if (setMethodEnum && !setMethodEnum.virtualAddress.isNull()) {
          setMethodEnum.implementation = function(type) {
            let resolved = null;
            try {
              let idx = parseInt(type.value, 10);
              if (Number.isInteger(idx) && idx >= 0 && idx < 3) {
                resolved = methodNames[idx];
              }
            } catch (e) {
            }
            if (resolved) {
              try {
                const key = this.handle.toString();
                let info = requestInfo.get(key) || {};
                info.method = resolved;
                requestInfo.set(key, info);
              } catch (e) {
              }
            }
            return this.method("InternalSetMethod").invoke(type);
          };
        }
      } catch (e) {
      }
      try {
        const uploadHandlerRawModule = unityWebRequestModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const ctor = uploadHandlerRawModule.method(".ctor", ["System.Byte[]"]);
        if (ctor && !ctor.virtualAddress.isNull()) {
          ctor.implementation = function(data) {
            try {
              const body = bytesToString2(data);
              if (body) {
                uploadHandlerBody.set(this.handle.toString(), body);
              }
            } catch (e) {
            }
            return this.method(".ctor", ["System.Byte[]"]).invoke(data);
          };
        }
      } catch (e) {
      }
      let byteElementClass = null;
      const downloadHandlerClass = unityWebRequestModule.class("UnityEngine.Networking.DownloadHandler");
      try {
        const gt = downloadHandlerClass.tryMethod("get_text");
        if (gt && !gt.virtualAddress.isNull()) {
          gt.implementation = function() {
            return this.method("get_text").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const gd = downloadHandlerClass.tryMethod("get_data");
        if (gd && !gd.virtualAddress.isNull()) {
          gd.implementation = function() {
            return this.method("get_data").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const sendMethod = unityWebRequest.tryMethod("SendWebRequest");
        if (sendMethod && !sendMethod.virtualAddress.isNull()) {
          sendMethod.implementation = function() {
            const url = getUrlFromRequest2(this);
            const method = getMethod2(this);
            let uploadHandler = null;
            let requestBody = null;
            try {
              const uploadField = this.tryField("m_UploadHandler") || this.tryField("uploadHandler");
              if (uploadField) {
                uploadHandler = uploadField.value;
                if (uploadHandler && !uploadHandler.isNull()) {
                  requestBody = getRequestBody2(uploadHandler);
                }
              }
            } catch (e) {
            }
            const requestId = this.handle.toString();
            requestData.set(requestId, {
              url,
              method,
              requestBody,
              startTime: Date.now()
            });
            return this.method("SendWebRequest").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const getResultMethod = unityWebRequest.tryMethod("get_result");
        if (getResultMethod && !getResultMethod.virtualAddress.isNull()) {
          getResultMethod.implementation = function() {
            const result = this.method("get_result").invoke();
            const requestId = this.handle.toString();
            const reqData = requestData.get(requestId);
            if (reqData) {
              requestData.delete(requestId);
              requestInfo.delete(requestId);
            }
            return result;
          };
        }
      } catch (e) {
      }
    } catch (e) {
    }
  }, "logger");
}
var libHookReady = false;
function tryHookLibil2cppFunction(functionName) {
  const libil2cpp = Process.findModuleByName("libil2cpp.so");
  if (!libil2cpp) {
    return;
  }
  const exportAddress = libil2cpp.findExportByName(functionName);
  if (!exportAddress) {
    return;
  }
  Interceptor.attach(exportAddress, {
    onEnter(args) {
      if (!hooksInstalled) {
        hooksInstalled = true;
        Hooks();
      }
    }
  });
  libHookReady = true;
}
(function waitForLib() {
  tryHookLibil2cppFunction(thngtohook);
  if (libHookReady)
    return;
  const t = setInterval(() => {
    if (libHookReady) {
      clearInterval(t);
      return;
    }
    tryHookLibil2cppFunction(thngtohook);
  }, 250);
})();
(function fallbackHooks() {
  let attempts = 0;
  const tryGo = () => {
    attempts++;
    if (hooksInstalled)
      return;
    if (!Process.findModuleByName("libil2cpp.so")) {
      if (attempts < 200)
        setTimeout(tryGo, 500);
      return;
    }
    try {
      Il2Cpp.perform(() => {
        if (hooksInstalled)
          return;
        try {
          if (!Il2Cpp.domain || !Il2Cpp.domain.assemblies || Il2Cpp.domain.assemblies.length === 0)
            return;
          const asm = Il2Cpp.domain.assembly("LethalApe.Game") || Il2Cpp.domain.assembly("Assembly-CSharp");
          if (!asm)
            return;
          hooksInstalled = true;
          Hooks();
          setTimeout(() => {
          }, 1e3);
        } catch (e) {
          console.error("[OGFMH] fallback Hooks() error: " + e);
        }
      });
    } catch (e) {
    }
    if (attempts < 200)
      setTimeout(tryGo, 500);
  };
  setTimeout(tryGo, 5e3);
})();

✄
{
  "version": 3,
  "sources": ["OGFMH.ts"],
  "mappings": ";AAOA,IAAI,iBAAiB;AACrB,IAAI,MAAM;AACV,IAAM,mBAAmB;EACrB;EAAc;EAAoB;EAAkB;EACpD;EAAsB;EAAsB;EAC5C;EAAyC;EAA0B;EACnE;EAA8B;EAC9B;EAAqC;EAAoB;EACzD;EAAuB;EAAe;EAAc;EACpD;EAAsB;EAA+B;EACrD;EAA4B;EAAwB;EACpD;EAA4B;EAA4B;EACxD;EAAgC;EAAyB;EACzD;EAA2B;EAAkC;EAC7D;EAA0B;EAAgC;EAC1D;EAAiC;EAA0B;EAC3D;EAAgC;EAA8B;EAC9D;EAAsC;EACtC;EAA2B;EAAoC;EAC/D;EAA6B;EAA0B;EACvD;EAA6B;EAA0B;EACvD;EAA4B;EAA0B;EACtD;EAA2B;EAA4B;EACvD;EAAyB;EAAwB;EACjD;EAA6B;EAA8B;EAC3D;EAAyB;EAAgC;EACzD;EAA6B;EAC7B;EAA4B;EAAyB;EACrD;EAA8B;EAA+B;EAC7D;EAAiC;EACjC;EAA0B;EAA4B;EACtD;EAA4B;EAAwB;EACpD;EAAmC;EAA0B;EAC7D;EAA0B;EAAwB;EAClD;EAAgC;EAA6B;EAC7D;EAAgC;EAA0B;EAAoB;EAC9E;EAAyC;EAAmB;EAC5D;EAAwB;EAAqB;EAC7C;EAAkC;EAClC;EAA0B;EAA0B;EACpD;EAAuB;EAAwB;EAAwB;EACvE;EAAsB;EAA8B;EACpD;EAAqC;EACrC;EAAiC;EACjC;EAA0C;EAC1C;EAA4B;EAC5B;EACA;EAAuD;EACvD;EAAwC;EACxC;EAAiD;EACjD;EAAoC;EACpC;EAAoC;EAA2B;EAC/D;EAA2B;EAA4B;EACvD;EAAgC;EAA0B;EAC1D;EAA8B;EAAmC;EACjE;EAA0B;EAA+B;EACzD;EAA6B;EAC7B;EAAqC;EACrC;EAAiC;EACjC;EAA2B;EAAiC;EAC5D;EAA6B;EAA4B;EACzD;EAAyB;EAAmC;EAC5D;EAAsB;EAAmB;EAAuB;EAChE;EAAsB;EAAuB;EAA2B;EACxE;EAA0B;EAAqC;EAC/D;EAA4B;EAA6B;EACzD;EAAgD;EAAuB;EACvE;EAAoB;EAA4B;EAChD;EAAwB;EAAuB;EAC/C;EAAwB;EAAuB;EAAuB;EACtE;EAAyC;EACzC;EAAsC;EACtC;EAAqC;EACrC;EAAwC;EACxC;EAAqC;EACrC;EAAyB;EAAuB;EAChD;EAAuB;EACvB;EAAkC;EAAuB;EACzD;EAAqB;EAAwB;EAC7C;EAA4B;EAAwB;EACpD;EAA+B;EAA+B;EAC9D;EAAiC;EACjC;EAAkC;EAClC;EAAoC;EACpC;EAA2C;EAC3C;EAA+B;EAC/B;EAAiC;EACjC;EAAiC;EAA+B;EAChE;EAAgC;EAA2B;EAC3D;EAA4B;EAAmC;EAC/D;;AAGJ,OAAO,UAAU,OAAO,WAAW,CAAA;AACnC,OAAO,QAAQ,UAAU,CAAA;AACzB,WAAW,OAAO,kBAAkB;AAChC,SAAO,QAAQ,QAAQ,GAAG,IAAI,MAAM,OAAO,OAAO,iBAAiB,GAAG;AAC1E;AAEA,IAAM,aAAa;AACnB,IAAI,aAAa;AACjB,IAAI,eAAe;AAEnB,IAAM,WAAW;AAEjB,IAAI,OAAO;AACX,IAAI,YAAY;AAChB,IAAI,oBAAoB;AACxB,IAAI,kBAAuB;AAC3B,IAAI,oBAAyB;AAC7B,IAAI,mBAAmB;AACvB,IAAI,WAAW;AAEf,IAAI,YAAY;AAChB,IAAI,YAAY;AAChB,IAAI,kBAAkB;AACtB,IAAI,eAAe;AACnB,IAAI,aAAkB;AACtB,IAAI,gBAAgB;AACpB,IAAI,mBAAwB;AAC5B,IAAI,yBAAwC;AAE5C,IAAI,OAAO;AAEX,IAAI,WAAW;AACf,IAAI,UAAuD,CAAC,KAAK,MAAM,MAAM,IAAI;AACjF,IAAI,YAAuD,CAAC,MAAM,MAAM,GAAK,CAAG;AAChF,IAAI,cAAuD,CAAC,KAAK,KAAK,KAAK,GAAG;AAC9E,IAAI,qBAAuD,CAAC,KAAK,MAAM,MAAM,CAAG;AAEhF,IAAM,aAAa;AAYnB,IAAM,SAAsB;EACxB,EAAE,MAAM,QAAS,IAAI,CAAC,MAAM,MAAM,MAAM,IAAI,GAAG,MAAM,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,QAAQ,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,eAAe,CAAC,KAAK,KAAK,KAAK,CAAG,GAAG,SAAS,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,aAAa,CAAC,KAAK,KAAK,KAAK,CAAG,GAAG,eAAe,CAAC,KAAK,KAAK,KAAK,CAAG,EAAC;EAC5P,EAAE,MAAM,QAAS,IAAI,CAAC,MAAM,MAAM,MAAM,IAAI,GAAG,MAAM,CAAC,KAAK,MAAM,GAAK,CAAG,GAAG,QAAQ,CAAC,KAAK,MAAM,MAAM,CAAG,GAAG,eAAe,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,SAAS,CAAC,MAAM,KAAK,MAAM,CAAG,GAAG,aAAa,CAAC,MAAM,MAAM,KAAK,CAAG,GAAG,eAAe,CAAC,MAAM,MAAM,KAAK,CAAG,EAAC;EAC/P,EAAE,MAAM,OAAS,IAAI,CAAC,MAAM,MAAM,MAAM,IAAI,GAAG,MAAM,CAAC,GAAK,MAAM,MAAM,CAAG,GAAG,QAAQ,CAAC,MAAM,KAAK,KAAK,CAAG,GAAG,eAAe,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,SAAS,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,aAAa,CAAC,KAAK,MAAM,MAAM,CAAG,GAAG,eAAe,CAAC,KAAK,MAAM,MAAM,CAAG,EAAC;EAChQ,EAAE,MAAM,SAAS,IAAI,CAAC,MAAM,KAAK,MAAM,IAAI,GAAG,MAAM,CAAC,MAAM,GAAK,MAAM,CAAG,GAAG,QAAQ,CAAC,KAAK,MAAM,MAAM,CAAG,GAAG,eAAe,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,SAAS,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,aAAa,CAAC,MAAM,MAAM,MAAM,CAAG,GAAG,eAAe,CAAC,MAAM,MAAM,MAAM,CAAG,EAAC;;AAEtQ,IAAI,aAAa;AACjB,IAAI,mBAA6B,OAAO,CAAC,EAAE;AAC3C,IAAI,mBAA6B,OAAO,CAAC,EAAE;AAC3C,IAAI,qBAA+B,OAAO,CAAC,EAAE;AAC7C,SAAS,aAAa;AAClB,QAAM,IAAI,OAAO,UAAU;AAC3B,YAAU,EAAE;AACZ,cAAY,EAAE;AACd,gBAAc,EAAE;AAChB,uBAAqB,EAAE;AACvB,qBAAmB,EAAE;AACrB,qBAAmB,EAAE;AACrB,uBAAqB,EAAE;AAAc;AAEzC,SAAS,aAAa,GAAW;AAC7B,eAAa;AACb,aAAU;AAAG;AAEjB,WAAU;AACV,IAAM,uBAAuB,OAAQ;AACrC,IAAM,0BAA0B,QAAS;AACzC,IAAM,sBAAsB,QAAS;AACrC,IAAM,kBAAkB;AACxB,IAAM,kBAAkB,OAAO;AAC/B,IAAM,iBAAiB,OAAO;AAC9B,IAAM,mBAAmB,QAAQ;AACjC,IAAM,wBAAwB,OAAO;AACrC,IAAM,iBAAiB;AACvB,IAAI,sBAA8B;AAClC,IAAI,uBAA+B;AACnC,IAAI,kBAAkB;AACtB,IAAI,cAAc;AAClB,IAAI,aAAa;AAGjB,IAAI,aAAa;AACjB,IAAI,WAAW;AACf,IAAI,YAAY;AAChB,IAAI,mBAA0B,CAAA;AAC9B,IAAI,UAAe;AACnB,SAAS,gBAAgB;AAAE,MAAI,YAAY;AAAM,cAAU,OAAO,MAAM,CAAC;AAAG,SAAO;AAAQ;AAC3F,IAAI,gBAAgB;AACpB,IAAI,iBAAiB;AACrB,IAAI,cAAc;AAClB,IAAI,gBAAgB;AACpB,IAAI,eAAe;AACnB,IAAI,iBAAiB;AACrB,IAAI,WAAW;AACf,IAAI,YAAY;AAChB,IAAI,cAAc;AAClB,IAAI,eAAe;AACnB,IAAI,YAAY;AAChB,IAAI,aAAa;AAEjB,IAAI,aAAa;AACjB,IAAI,UAAU;AACd,IAAI,WAA6C,CAAC,QAAQ,OAAQ,QAAQ,IAAI;AAW9E,IAAI,eAAe;AAEnB,SAAS,QAAQ;AAEjB,SAAO,QAAQ,MAAM;AACjB,UAAM,SAAS;MACX,kBAA+B,OAAO,OAAO,SAAS,iBAAiB,EAAE;MACzE,0BAAoC,OAAO,OAAO,SAAS,wBAAwB,EAAE;MACrF,6BAAoC,OAAO,OAAO,SAAS,2BAA2B,EAAE;MACxF,wBAAoC,OAAO,OAAO,SAAS,sBAAsB,EAAE;MACnF,kBAAoC,OAAO,OAAO,SAAS,gBAAgB,EAAE;MAC7E,mCAAoC,OAAO,OAAO,SAAS,iCAAiC,EAAE;MAC9F,qBAAoC,OAAO,OAAO,SAAS,mBAAmB,EAAE;MAChF,wBAAoC,OAAO,OAAO,SAAS,sBAAsB,EAAE;MACnF,2BAAoC,OAAO,OAAO,SAAS,yBAAyB,EAAE;MACtF,iCAAoC,OAAO,OAAO,SAAS,+BAA+B,EAAE;MAC5F,yBAAoC,OAAO,OAAO,SAAS,uBAAuB,EAAE;MACpF,gBAAqC,MAAM;AAAE,YAAI;AAAE,iBAAO,OAAO,OAAO,SAAS,aAAa,EAAE;QAAO,SAAS,GAAG;AAAE,iBAAO;QAAM;MAAC,GAAG;MACtI,mBAAqC,MAAM;AAAE,YAAI;AAAE,iBAAO,OAAO,OAAO,SAAS,gBAAgB,EAAE;QAAO,SAAS,GAAG;AAAE,cAAI;AAAE,mBAAO,OAAO,OAAO,SAAS,iBAAiB,EAAE;UAAO,SAAS,IAAI;AAAE,mBAAO;UAAM;QAAE;MAAC,GAAG;;AAG5N,UAAM,iBAA2B,OAAO,gBAAgB;AACxD,UAAM,kBAA2B,OAAO,wBAAwB;AAChE,UAAM,qBAA2B,OAAO,2BAA2B;AACnE,UAAM,gBAA2B,OAAO,gBAAgB;AACxD,UAAM,sBAA2B,OAAO,sBAAsB;AAC9D,UAAM,2BAA2B,OAAO,iCAAiC;AACzE,UAAM,mBAA2B,OAAO,mBAAmB;AAC3D,UAAM,gBAA2B,OAAO,sBAAsB;AAC9D,UAAM,mBAA2B,OAAO,yBAAyB;AACjE,UAAM,wBAA2B,OAAO,uBAAuB;AAE/D,QAAI,mBAAmB;AACvB,QAAI,iBAAiB;AACrB,QAAI;AAAE,UAAI,oBAAoB,MAAM;AAAE,2BAAmB,iBAAiB,MAAM,yBAAyB;AAAG,yBAAiB,iBAAiB,MAAM,uBAAuB;MAAG;IAAE,SAAS,GAAG;IAAE;AAC9L,QAAI,gBAAgB;AACpB,QAAI;AAAE,UAAI,OAAO,aAAa,KAAK;AAAM,wBAAgB,OAAO,aAAa,EAAE,MAAM,6BAA6B;IAAG,SAAS,GAAG;IAAE;AACnI,QAAI,uBAAuB;AAC3B,QAAI;AAAE,UAAI,OAAO,gBAAgB,KAAK;AAAM,+BAAuB,OAAO,gBAAgB,EAAE,MAAM,kCAAkC;IAAG,SAAS,GAAG;IAAE;AACrJ,QAAI,sBAAsB;AAC1B,QAAI;AAAE,UAAI,OAAO,gBAAgB,KAAK;AAAM,8BAAsB,OAAO,gBAAgB,EAAE,MAAM,iCAAiC;IAAG,SAAS,GAAG;IAAE;AACnJ,QAAI,uBAAuB;AAC3B,QAAI;AAAE,UAAI,OAAO,aAAa,KAAK;AAAM,+BAAuB,OAAO,aAAa,EAAE,MAAM,oCAAoC;IAAG,SAAS,GAAG;IAAE;AACjJ,QAAI,eAAe;AACnB,QAAI;AAAE,UAAI,OAAO,aAAa,KAAK;AAAM,uBAAe,OAAO,aAAa,EAAE,MAAM,4BAA4B;IAAG,SAAS,GAAG;IAAE;AAEjI,UAAM,eAAoB,cAAc,MAAM,6BAA6B;AAC3E,UAAM,eAAoB,cAAc,MAAM,6BAA6B;AAE3E,UAAM,aAAoB,gBAAgB,MAAM,wBAAwB;AACxE,UAAM,SAAoB,gBAAgB,MAAM,oBAAoB;AACpE,UAAM,iBAAoB,gBAAgB,MAAM,uBAAuB;AACvE,UAAM,UAAoB,gBAAgB,MAAM,qBAAqB;AACrE,UAAM,aAAoB,gBAAgB,MAAM,wBAAwB;AACxE,UAAM,OAAoB,gBAAgB,MAAM,kBAAkB;AAClE,UAAM,YAAoB,gBAAgB,MAAM,uBAAuB;AACvE,UAAM,WAAoB,gBAAgB,MAAM,sBAAsB;AACtE,UAAM,WAAoB,gBAAgB,MAAM,sBAAsB;AACtE,UAAM,SAAoB,gBAAgB,MAAM,oBAAoB;AACpE,UAAM,gBAAoB,gBAAgB,MAAM,2BAA2B;AAC3E,UAAM,eAAoB,gBAAgB,MAAM,0BAA0B;AAE1E,UAAM,gBAAgB,sBAAsB,MAAM,0BAA0B;AAE5E,UAAM,UAAU,CAAC,OAAY,SAAsB;AAC/C,UAAI;AAAE,eAAO,MAAM,MAAM,IAAI;MAAG,SAAS,GAAG;AAAE,eAAO;MAAM;IAAC;AAGpE,UAAM,YAAY,MAAM;AAAE,UAAI;AAAE,eAAO,OAAO,OAAO,SAAS,gBAAgB,EAAE;MAAO,SAAS,GAAG;AAAE,eAAO;MAAgB;IAAC,GAAG;AAChI,UAAM,cAAc,QAAQ,UAAU,8BAA8B;AACpE,UAAM,kBAAkB,QAAQ,UAAU,uBAAuB;AACjE,UAAM,YAAY,QAAQ,UAAU,MAAM;AAC1C,UAAM,kBAAkB,QAAQ,gBAAgB,8BAA8B;AAC9E,UAAM,eAAe,QAAQ,UAAU,oBAAoB;AAC3D,UAAM,sBAAsB,QAAQ,UAAU,sCAAsC;AACpF,UAAM,iBAAiB,QAAQ,UAAU,sBAAsB;AAC/D,UAAM,uBAAuB,QAAQ,UAAU,uCAAuC;AACtF,UAAM,gBAAgB,QAAQ,UAAU,qBAAqB;AAC7D,UAAM,mBAAmB,QAAQ,UAAU,8BAA8B;AACzE,UAAM,kBAAkB,QAAQ,UAAU,oCAAoC;AAC9E,UAAM,sBAAsB,QAAQ,UAAU,mCAAmC;AACjF,UAAM,uBAAuB,QAAQ,UAAU,oCAAoC;AACnF,UAAM,oBAAoB,MAAM;AAAE,UAAI;AAAE,eAAO,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,yBAAyB;MAAG,SAAS,GAAG;AAAE,eAAO;MAAM;IAAC,GAAG;AACvK,QAAI,WAAgB;AACpB,QAAI,kBAAuB;AAC3B,QAAI,yBAA8B;AAClC,QAAI,oBAAyB;AAC7B,QAAI,qBAA0B;AAC9B,QAAI,eAAoB;AACxB,QAAI,eAAoB;AAEpB,UAAM,cAAoB,mBAAmB,MAAM,yBAAyB;AAC5E,UAAM,WAAoB,mBAAmB,MAAM,sBAAsB;AACzE,UAAM,YAAoB,mBAAmB,MAAM,uBAAuB;AAC1E,UAAM,UAAoB,mBAAmB,MAAM,qBAAqB;AACxE,UAAM,eAAoB,mBAAmB,MAAM,0BAA0B;AAE7E,UAAM,SAAoB,oBAAoB,MAAM,oBAAoB;AACxE,UAAM,eAAoB,cAAc,MAAM,6BAA6B;AAC3E,UAAM,mBAAoB,cAAc,MAAM,iCAAiC;AAC/E,UAAM,OAAoB,cAAc,MAAM,qBAAqB;AACnE,UAAM,OAAoB,yBAAyB,MAAM,kBAAkB;AAC3E,QAAI,aAAkB;AACtB,QAAI,aAAkB;AACtB,QAAI,aAAkB;AACtB,QAAI,YAAiB;AACrB,QAAI,qBAA0B;AAC9B,QAAI,QAAa;AAEjB,aAAS,QAAQ,QAAQ;AAAE,aAAO,OAAO,WAAW,CAAC,EAAE,OAAO,MAAM;IAAE;AACtE,aAAS,aAAa,KAAU,MAAM;AAAE,UAAI,CAAC,OAAO,CAAC,QAAQ,CAAC,KAAK;AAAM,eAAO;AAAM,aAAO,IAAI,OAAO,cAAc,EAAE,SAAS,aAAa,EAAE,OAAO,KAAK,KAAK,MAAM;IAAE;AACzK,aAAS,qBAAqB,KAAU,MAAM;AAAE,UAAI,CAAC,OAAO,CAAC,QAAQ,CAAC,KAAK;AAAM,eAAO;AAAM,aAAO,IAAI,OAAO,sBAAsB,EAAE,SAAS,aAAa,EAAE,OAAO,KAAK,KAAK,MAAM;IAAE;AACzL,aAAS,aAAa,KAAU,MAAM;AAAE,UAAI,CAAC,OAAO,CAAC,QAAQ,CAAC,KAAK;AAAM,eAAO;AAAM,aAAO,IAAI,OAAO,cAAc,EAAE,SAAS,aAAa,EAAE,OAAO,KAAK,KAAK,MAAM;IAAE;AACzK,aAAS,kBAAkB,MAAW;AAAE,UAAI,CAAC;AAAM,eAAO,CAAA;AAAI,UAAI;AAAE,YAAI,KAAK;AAAM,iBAAO,OAAO,OAAO,mBAAmB,EAAE,SAAS,aAAa,EAAE,OAAO,KAAK,KAAK,MAAM;MAAG,SAAS,GAAG;MAAE;AAAE,UAAI;AAAE,eAAO,OAAO,OAAO,mBAAmB,EAAE,QAAQ,IAAI,EAAE,OAAM;MAAI,SAAS,GAAG;AAAE,eAAO,CAAA;MAAI;IAAC;AACjS,aAAS,iBAAiB,MAAW;AAAE,UAAI,CAAC;AAAM,eAAO;AAAM,UAAI;AAAE,YAAI,KAAK;AAAM,iBAAO,OAAO,OAAO,kBAAkB,EAAE,SAAS,aAAa,EAAE,OAAO,KAAK,KAAK,MAAM;MAAG,SAAS,GAAG;MAAE;AAAE,UAAI;AAAE,eAAO,OAAO,OAAO,kBAAkB,EAAE,QAAQ,IAAI,EAAE,OAAM;MAAI,SAAS,GAAG;AAAE,eAAO;MAAM;IAAC;AAClS,aAAS,aAAa,KAAU;AAAE,aAAO,IAAI,OAAO,eAAe,EAAE,OAAM;IAAG;AAC9E,aAAS,cAAc,QAAQ;AAAE,aAAO,OAAO,OAAO,YAAY,EAAE,OAAM;IAAG;AAC7E,aAAS,kBAAkB;AAAE,oBAAc,OAAO,yBAAyB,EAAE,OAAM;IAAG;AACtF,aAAS,KAAK,GAAG,GAAG,GAAG;AACnB,YAAM,OAAO,WAAW,OAAO,iBAAiB,EAAE,OAAO,CAAC;AAC1D,YAAM,IAAI,KAAK,OAAO,eAAe,EAAE,OAAM;AAC7C,QAAE,OAAO,cAAc,EAAE,OAAO,CAAC,GAAG,GAAG,CAAC,CAAC;AACzC,YAAM,MAAM,EAAE,OAAO,cAAc,EAAE,OAAM;AAC3C,aAAO,OAAO,WAAW,CAAC,EAAE,OAAO,IAAI;AACvC,aAAO;IAAI;AAEf,aAAS,YAAY;AACjB,YAAM,OAAO,WAAW,OAAO,iBAAiB,EAAE,OAAO,CAAC;AAC1D,YAAM,IAAI,KAAK,OAAO,eAAe,EAAE,OAAM,EAAG,OAAO,cAAc,EAAE,OAAM;AAC7E,aAAO,OAAO,WAAW,CAAC,EAAE,OAAO,IAAI;AACvC,aAAO;IAAE;AAGjB,aAAS,QAAQ,MAAc;AAC3B,UAAI;AAAE,sBAAc,OAAO,cAAc,EAAE,OAAO,OAAO,OAAO,IAAI,CAAC;MAAG,SAAS,GAAG;MAAE;AACtF,UAAI;AACA,YAAI,wBAAwB;AAAM,+BAAqB,OAAO,aAAa,EAAE,OAAO,OAAO,OAAO,IAAI,CAAC;MAC3G,SAAS,GAAG;MAAE;IAAC;AAGf,aAAS,iBAAiB,OAAe,IAAI,iBAA0B,MAAM,YAAoB,GAAG;AAChG,YAAM,QAAS,uBAAuB;AACtC,6BAAuB,OAAO;AAC9B,4BAAsB;AACtB,UAAI,kBAAkB,CAAC;AAAO,mBAAU;IAAG;AAG/C,aAAS,mBAAmB,UAAe,UAA4C;AACnF,YAAM,WAAW,CAAC,MAAc,UAAkB;AAC9C,YAAI;AAAE,mBAAS,OAAO,UAAU,EAAE,SAAS,iBAAiB,eAAe,EAAE,OAAO,OAAO,OAAO,IAAI,GAAG,KAAK;QAAG,SAAS,GAAG;QAAC;MAAC;AAEnI,YAAM,YAAY,CAAC,MAAc,UAA4C;AACzE,YAAI;AAAE,mBAAS,OAAO,UAAU,EAAE,SAAS,iBAAiB,mBAAmB,EAAE,OAAO,OAAO,OAAO,IAAI,GAAG,KAAK;QAAG,SAAS,GAAG;QAAC;MAAC;AAEvI,gBAAU,cAAc,QAAQ;AAChC,gBAAU,UAAU,QAAQ;AAC5B,YAAM,WAA6C,CAAC,SAAS,CAAC,IAAI,MAAM,SAAS,CAAC,IAAI,MAAM,SAAS,CAAC,IAAI,MAAM,CAAG;AACnH,gBAAU,kBAAkB,QAAQ;AACpC,UAAI;AAAE,iBAAS,OAAO,eAAe,EAAE,OAAO,OAAO,OAAO,WAAW,CAAC;MAAG,SAAS,GAAG;MAAC;AACxF,UAAI;AAAE,iBAAS,OAAO,gBAAgB,EAAE,OAAO,OAAO,OAAO,YAAY,GAAG,OAAO,OAAO,QAAQ,CAAC;MAAG,SAAS,GAAG;MAAC;AACnH,eAAS,YAAY,CAAC;AACtB,eAAS,WAAW,CAAC;AACrB,eAAS,SAAS,CAAC;AACnB,eAAS,eAAe,CAAC;AACzB,eAAS,eAAe,CAAC;AACzB,eAAS,aAAa,CAAC;AACvB,UAAI;AAAE,iBAAS,OAAO,gBAAgB,EAAE,OAAO,OAAO,OAAO,2BAA2B,CAAC;MAAG,SAAS,GAAG;MAAC;AACzG,UAAI;AAAE,iBAAS,OAAO,gBAAgB,EAAE,OAAO,OAAO,OAAO,sBAAsB,CAAC;MAAG,SAAS,GAAG;MAAC;AACpG,UAAI;AAAE,iBAAS,OAAO,gBAAgB,EAAE,OAAO,OAAO,OAAO,gBAAgB,CAAC;MAAG,SAAS,GAAG;MAAC;AAC9F,UAAI;AAAE,iBAAS,OAAO,iBAAiB,EAAE,OAAO,GAAI;MAAG,SAAS,GAAG;MAAC;IAAC;AAGzE,aAAS,oBAAoB,UAAe;AACxC,UAAI;AAAE,iBAAS,OAAO,UAAU,EAAE,SAAS,iBAAiB,eAAe,EAAE,OAAO,OAAO,OAAO,SAAS,GAAG,CAAC;MAAG,SAAS,GAAG;MAAC;AAC/H,UAAI;AAAE,iBAAS,OAAO,UAAU,EAAE,SAAS,iBAAiB,eAAe,EAAE,OAAO,OAAO,OAAO,QAAQ,GAAG,CAAC;MAAG,SAAS,GAAG;MAAC;AAC9H,UAAI;AAAE,iBAAS,OAAO,UAAU,EAAE,SAAS,iBAAiB,eAAe,EAAE,OAAO,OAAO,OAAO,WAAW,GAAG,CAAC;MAAG,SAAS,GAAG;MAAC;AACjI,UAAI;AAAE,iBAAS,OAAO,UAAU,EAAE,SAAS,iBAAiB,eAAe,EAAE,OAAO,OAAO,OAAO,WAAW,GAAG,CAAC;MAAG,SAAS,GAAG;MAAC;AACjI,UAAI;AAAE,iBAAS,OAAO,gBAAgB,EAAE,OAAO,OAAO,OAAO,YAAY,GAAG,OAAO,OAAO,QAAQ,CAAC;MAAG,SAAS,GAAG;MAAC;AACnH,UAAI;AAAE,iBAAS,OAAO,gBAAgB,EAAE,OAAO,OAAO,OAAO,gBAAgB,CAAC;MAAG,SAAS,GAAG;MAAC;AAC9F,UAAI;AAAE,iBAAS,OAAO,gBAAgB,EAAE,OAAO,OAAO,OAAO,sBAAsB,CAAC;MAAG,SAAS,GAAG;MAAC;AACpG,UAAI;AAAE,iBAAS,OAAO,iBAAiB,EAAE,OAAO,GAAI;MAAG,SAAS,GAAG;MAAC;IAAC;AAGzE,aAAS,4BAA4B,KAA+B,OAAiC,WAA6C,cAAgD,QAAa,cAAuB,OAAO,cAAsB,OAAO;AACtQ,YAAM,cAAc,CAAC,QAAkC,MAAgC,OAAyC,iBAA0B;AACtJ,eAAO,aAAa,QAAQ,oBAAoB,MAAM,GAAG,OAAO,QAAQ,YAAY;MAAE;AAE1F,UAAI,mBAAmB,cAAc,GAAG;AACpC,oBAAY,CAAC,IAAI,CAAC,IAAI,MAAO,IAAI,CAAC,GAAG,IAAI,CAAC,CAAC,GAAG,CAAC,MAAM,CAAC,GAAG,MAAM,CAAC,IAAI,cAAc,GAAG,MAAM,CAAC,IAAI,cAAc,CAAC,GAAG,cAAc,KAAK;MACzI;AACA,aAAO,YAAY,KAAK,OAAO,WAAW,WAAW;IAAE;AAG/D,aAAS,aAAa,MAAM,YAAY,MAAM,oBAAoB,QAAQ,WAAW,gBAAwB,GAAG,WAA6C,CAAC,GAAG,GAAG,GAAG,CAAC,GAAG,SAAS,MAAM,iBAA0B,OAAO;AACvN,YAAM,MAAM,WAAW,OAAO,iBAAiB,EAAE,OAAO,aAAa;AACrE,YAAM,WAAW,aAAa,KAAK,QAAQ;AAC3C,UAAI,SAAS,CAAC,KAAK,GAAG;AAClB,iBAAS,OAAO,aAAa,EAAE,OAAO,KAAK;MAC/C,OAAO;AACH,cAAM,WAAW,SAAS,OAAO,cAAc,EAAE,OAAM;AACvD,iBAAS,OAAO,YAAY,EAAE,OAAO,UAAU;AAC/C,iBAAS,OAAO,WAAW,EAAE,OAAO,QAAQ;AAC5C,YAAI;AACA,6BAAmB,UAAU,QAAQ;QACzC,SAAS,GAAG;AACR,cAAI;AAAE,gCAAoB,QAAQ;UAAG,SAASA,IAAG;UAAC;QACtD;MACJ;AACA,YAAM,MAAM,aAAa,KAAK,QAAQ;AACtC,UAAI,CAAC,IAAI,OAAM,GAAI;AACf,YAAI,gBAAgB;AAChB,cAAI,OAAO,aAAa,EAAE,OAAO,IAAI;AACrC,cAAI,OAAO,eAAe,EAAE,OAAO,IAAI;QAC3C,OAAO;AACH,iBAAO,OAAO,WAAW,CAAC,EAAE,OAAO,GAAG;QAC1C;MACJ;AACA,YAAM,YAAY,aAAa,GAAG;AAClC,UAAI,UAAU;AAAM,kBAAU,OAAO,aAAa,CAAC,EAAE,OAAO,QAAQ,KAAK;AACzE,gBAAU,OAAO,cAAc,EAAE,OAAO,GAAG;AAC3C,gBAAU,OAAO,cAAc,EAAE,OAAO,GAAG;AAC3C,gBAAU,OAAO,gBAAgB,EAAE,OAAO,KAAK;AAC/C,aAAO;IAAI;AAGX,aAAS,eAAe,cAAc,OAAe,IAAI,QAA0C,CAAC,GAAG,GAAG,GAAG,CAAC,GAAG,MAAM,YAAY,OAAO,WAAW;AACjJ,YAAM,QAAQ,aAAa,aAAa,YAAY,oBAAoB,WAAW,GAAG,CAAC,GAAG,GAAG,GAAG,CAAC,GAAG,aAAa,YAAY,CAAC,GAAG,IAAI;AACrI,YAAM,OAAO,UAAU,EAAE,OAAO,OAAO,OAAO,IAAI,CAAC;AACnD,YAAM,OAAO,UAAU,EAAE,OAAO,KAAK;AACrC,YAAM,OAAO,cAAc,EAAE,OAAO,CAAC;AACrC,YAAM,OAAO,WAAW,EAAE,OAAO,KAAK;AACtC,YAAM,OAAO,eAAe,EAAE,OAAO,CAAC;AACtC,YAAM,OAAO,eAAe,EAAE,OAAO,CAAC;AACtC,YAAM,OAAO,0BAA0B,EAAE,OAAO,IAAI;AACpD,YAAM,OAAO,uBAAuB,EAAE,OAAO,CAAC;AAC9C,UAAI;AAAE,cAAM,OAAO,uBAAuB,EAAE,OAAO,IAAI;MAAG,SAAS,GAAG;MAAC;AACvE,YAAM,gBAAgB,aAAa,OAAO,aAAa;AACvD,oBAAc,OAAO,eAAe,EAAE,OAAO,IAAI;AACjD,oBAAc,OAAO,cAAc,EAAE,OAAO,GAAG;AAC/C,oBAAc,OAAO,cAAc,EAAE,OAAO,WAAW,OAAO,OAAO,EAAE,OAAO,KAAO,IAAM,EAAI,CAAC;IAAE;AAGtG,aAAS,kBAAkB,QAAQ,YAAY;AAC3C,YAAM,gBAAgB,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,sBAAsB;AACzG,YAAM,WAAW,aAAa,QAAQ,aAAa;AACnD,UAAI,CAAC;AAAU;AACf,YAAM,WAAW,SAAS,OAAO,cAAc,EAAE,OAAM;AACvD,YAAM,IAAI,WAAW,UAAU,qBAAqB;AACpD,UAAI;AAAE,iBAAS,OAAO,WAAW,EAAE,OAAO,CAAC;MAAG,SAAS,GAAG;MAAC;AAC3D,UAAI;AAAE,iBAAS,OAAO,UAAU,EAAE,SAAS,iBAAiB,mBAAmB,EAAE,OAAO,OAAO,OAAO,YAAY,GAAG,CAAC;MAAG,SAAS,GAAG;MAAC;AACtI,UAAI;AAAE,iBAAS,OAAO,UAAU,EAAE,SAAS,iBAAiB,mBAAmB,EAAE,OAAO,OAAO,OAAO,gBAAgB,GAAG,CAAC,EAAE,CAAC,IAAI,MAAM,EAAE,CAAC,IAAI,MAAM,EAAE,CAAC,IAAI,MAAM,CAAG,CAAC;MAAG,SAAS,GAAG;MAAC;IAAC;AAG1L,aAAS,aAAa;AAClB,UAAI,QAAQ,MAAM;AAAE,eAAO,OAAO,WAAW,CAAC,EAAE,OAAO,IAAI;AAAG,eAAO;MAAM;IAAC;AAEhF,QAAI,YAAY;AAChB,QAAI,aAAa;AACjB,QAAI,uBAAuB;AAC3B,aAAS,aAAa;AAClB,UAAI;AACJ,eAAO,aAAa,YAAY,oBAAoB,CAAC,KAAK,KAAK,MAAM,GAAG,GAAG,CAAC,GAAG,GAAG,GAAG,CAAC,CAAC;AACvF,gBAAQ,aAAa,MAAM,WAAW,CAAC;AACvC,YAAI;AAAE,eAAK,OAAO,WAAW,EAAE,OAAO,EAAE;QAAG,SAAS,GAAG;QAAC;AAExD,cAAM,IAAI;AACV,cAAM,cAAc,OAAO;AAC3B,cAAM,eAAe,QAAQ;AAC7B,cAAM,cAAc,SAAS;AAE7B,oCAA4B,CAAC,MAAM,GAAG,GAAG,YAAY,GAAG,CAAC,MAAM,GAAG,OAAO,GAAG,WAAW,GAAG,SAAS,kBAAkB,aAAa,IAAI,GAAG,OAAO,oBAAoB;AAEpK,YAAI;AACA,gBAAM,eAAe,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,oBAAoB;AACtG,gBAAM,UAAU,OAAO,OAAO,mBAAmB,EAAE,SAAS,aAAa,EAAE,OAAO,aAAa,KAAK,MAAM;AAC1G,mBAAS,KAAK,GAAG,KAAK,QAAQ,QAAQ,MAAM;AACxC,gBAAI;AACA,oBAAM,MAAM,QAAQ,IAAI,EAAE;AAC1B,oBAAM,aAAa,IAAI,OAAO,iBAAiB,EAAE,OAAM;AACvD,mBAAK,aAAc,KAAK,QAAS;AAAG,oBAAI,OAAO,iBAAiB,EAAE,OAAO,aAAc,KAAK,EAAG;YACnG,SAAS,GAAG;YAAC;UACjB;QACJ,SAAS,GAAG;QAAC;AAEb,cAAM,eAAe,aAAa,YAAY,oBAAoB,WAAW,GAAG,CAAC,GAAG,GAAG,GAAG,CAAC,GAAG,aAAa,IAAI,CAAC;AAChH,cAAM,SAAS,aAAa,cAAc,MAAM;AAChD,gBAAQ,aAAa,cAAc,WAAW,CAAC;AAC/C,cAAM,eAAe,aAAa,cAAc,YAAY;AAC5D,qBAAa,cAAc,gBAAgB;AAC3C,eAAO,OAAO,gBAAgB,EAAE,OAAO,CAAC;AACxC,eAAO,OAAO,kBAAkB,EAAE,OAAO,KAAK;AAC9C,qBAAa,OAAO,0BAA0B,EAAE,OAAO,GAAM;AAC7D,qBAAa;AACb,YAAI;AACA,gBAAM,cAAc,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,oBAAoB;AACrG,cAAI,UAAU,YAAY,OAAO,UAAU,EAAE,OAAM;AACnD,cAAI,CAAC,WAAW,QAAQ,OAAM,GAAI;AAC9B,kBAAM,KAAK,YAAY,OAAO,qBAAqB,EAAE,OAAM;AAC3D,gBAAI,KAAK,GAAG;AACR,oBAAM,SAAS,YAAY,OAAO,iBAAiB,CAAC,EAAE,OAAO,CAAA,CAAE;AAC/D,uBAAS,KAAK,GAAG,KAAK,IAAI,MAAM;AAC5B,sBAAM,IAAI,OAAO,IAAI,EAAE;AACvB,oBAAI,KAAK,CAAC,EAAE,OAAM,KAAM,EAAE,OAAO,wBAAwB,EAAE,OAAM,GAAI;AACjE,4BAAU;AACV;gBACJ;cACJ;YACJ;UACJ;AACA,cAAI,WAAW,CAAC,QAAQ,OAAM;AAAI,mBAAO,OAAO,iBAAiB,EAAE,OAAO,OAAO;QACrF,SAAS,GAAG;QAAC;AAEb,uBAAe,cAAc,WAAW,KAAK,cAAc,CAAC,KAAK,WAAW,CAAC,OAAO,GAAG,GAAG,QAAQ,CAAC,GAAG,CAAC,MAAM,GAAG,OAAO,CAAC,CAAC;AAEzH,YAAI,OAAO;AAAsB,gCAAsB;AACvD,uBAAe,cAAc,oBAAoB,SAAS,IAAI,MAAM,sBAAsB,MAAM,IAAI,WAAW,CAAC,OAAO,GAAG,GAAG,QAAQ,CAAC,GAAG,CAAC,MAAM,GAAG,QAAQ,CAAC,CAAC;AAE7J,cAAM,QAAQ,QAAQ;AACtB,2BAAmB,CAAA;AACnB;AACI,gBAAM,aAAa,4BAA4B,CAAC,MAAM,GAAG,GAAG,KAAK,GAAG,CAAC,OAAO,GAAG,uBAAuB,QAAQ,CAAC,GAAG,aAAa,kBAAkB,aAAa,IAAI,GAAG,MAAM,uBAAuB;AAClM,qBAAW,OAAO,UAAU,EAAE,OAAO,OAAO,OAAO,eAAe,CAAC;AACnE,uBAAa,YAAY,eAAe;AACxC,cAAI,oBAAoB,MAAM;AAAE,gBAAI;AAAE,2BAAa,YAAY,gBAAgB;YAAG,SAAS,GAAG;YAAE;UAAE;AAClG,uBAAa,YAAY,QAAQ,EAAE,OAAO,eAAe,EAAE,OAAO,IAAI;AACtE,2BAAiB,KAAK,EAAE,MAAM,gBAAgB,UAAU,aAAa,YAAY,QAAQ,GAAG,IAAI,WAAU,CAAE;AAC5G,yBAAe,cAAc,aAAa,WAAW,CAAC,OAAO,GAAG,GAAG,KAAK,GAAG,CAAC,MAAM,GAAG,OAAO,CAAC,CAAC;QAClG;AAEA;AACI,gBAAM,aAAa,4BAA4B,CAAC,MAAM,GAAG,OAAO,GAAG,WAAW,GAAG,CAAC,OAAO,GAAG,QAAQ,GAAG,OAAO,CAAC,GAAG,aAAa,kBAAkB,aAAa,IAAI,GAAG,MAAM,uBAAuB;AAClM,qBAAW,OAAO,UAAU,EAAE,OAAO,OAAO,OAAO,eAAe,CAAC;AACnE,uBAAa,YAAY,eAAe;AACxC,cAAI,oBAAoB,MAAM;AAAE,gBAAI;AAAE,2BAAa,YAAY,gBAAgB;YAAG,SAAS,GAAG;YAAE;UAAE;AAClG,uBAAa,YAAY,QAAQ,EAAE,OAAO,eAAe,EAAE,OAAO,IAAI;AACtE,2BAAiB,KAAK,EAAE,MAAM,gBAAgB,UAAU,aAAa,YAAY,QAAQ,GAAG,IAAI,WAAU,CAAE;AAC5G,yBAAe,cAAc,KAAK,WAAW,CAAC,OAAO,GAAG,OAAO,GAAG,WAAW,GAAG,CAAC,OAAO,GAAG,QAAQ,CAAC,CAAC;QACzG;AACA;AACI,gBAAM,aAAa,4BAA4B,CAAC,MAAM,GAAG,QAAQ,GAAG,WAAW,GAAG,CAAC,OAAO,GAAG,QAAQ,GAAG,OAAO,CAAC,GAAG,aAAa,kBAAkB,aAAa,IAAI,GAAG,MAAM,uBAAuB;AACnM,qBAAW,OAAO,UAAU,EAAE,OAAO,OAAO,OAAO,WAAW,CAAC;AAC/D,uBAAa,YAAY,eAAe;AACxC,cAAI,oBAAoB,MAAM;AAAE,gBAAI;AAAE,2BAAa,YAAY,gBAAgB;YAAG,SAAS,GAAG;YAAE;UAAE;AAClG,uBAAa,YAAY,QAAQ,EAAE,OAAO,eAAe,EAAE,OAAO,IAAI;AACtE,2BAAiB,KAAK,EAAE,MAAM,YAAY,UAAU,aAAa,YAAY,QAAQ,GAAG,IAAI,WAAU,CAAE;AACxG,yBAAe,cAAc,KAAK,WAAW,CAAC,OAAO,GAAG,QAAQ,GAAG,WAAW,GAAG,CAAC,OAAO,GAAG,QAAQ,CAAC,CAAC;QAC1G;AAEA,cAAM,iBAAiB,KAAK,IAAI,KAAK,KAAK,QAAQ,eAAe,EAAE,SAAS,cAAc,IAAI,GAAG,CAAC;AAClG,YAAI,cAAc;AAAgB,wBAAc;AAChD,cAAM,aAAa,QAAQ,eAAe,EAAE,MAAM,cAAc,cAAc,EAAE,MAAM,GAAG,cAAc;AACvG,cAAM,YAAY,QAAQ;AAC1B,YAAI,IAAI;AACR,mBAAW,QAAQ,CAAC,eAAe;AAC/B,gBAAM,OAAO,YAAY,IAAI;AAC7B,gBAAM,SAAS,4BAA4B,CAAC,QAAQ,GAAG,GAAG,IAAI,GAAG,CAAC,OAAO,GAAG,gBAAgB,eAAe,GAAG,WAAW,UAAU,qBAAqB,aAAa,oBAAoB,aAAa,IAAI,GAAG,MAAM,mBAAmB;AACtO,iBAAO,OAAO,UAAU,EAAE,OAAO,OAAO,OAAO,MAAM,WAAW,UAAU,CAAC;AAC3E,uBAAa,QAAQ,eAAe;AACpC,cAAI,oBAAoB,MAAM;AAAE,gBAAI;AAAE,2BAAa,QAAQ,gBAAgB;YAAG,SAAS,GAAG;YAAE;UAAE;AAC9F,uBAAa,QAAQ,QAAQ,EAAE,OAAO,eAAe,EAAE,OAAO,IAAI;AAClE,2BAAiB,KAAK,EAAE,MAAM,WAAW,YAAY,UAAU,aAAa,QAAQ,QAAQ,GAAG,IAAI,OAAM,CAAE;AAC3G,yBAAe,eAAe,WAAW,UAAU,SAAS,MAAM,WAAW,YAAY,WAAW,CAAC,OAAO,GAAG,GAAG,IAAI,GAAG,CAAC,MAAM,GAAG,OAAO,CAAC,CAAC;AAC5I,4BAAkB,QAAQ,UAAU;AACpC;QAAI,CACP;MACD,SAAS,GAAG;MAEZ;IAAC;AAGL,aAAS,kBAAkB;AACvB,UAAI,WAAW;AACX,oBAAY,aAAa,YAAY,oBAAoB,CAAC,MAAM,MAAM,IAAI,GAAG,GAAG,SAAS,mBAAmB,IAAI;MACpH,OAAO;AACH,oBAAY,aAAa,YAAY,oBAAoB,CAAC,MAAM,MAAM,IAAI,GAAG,GAAG,SAAS,oBAAoB,IAAI;MACrH;AACA,0BAAoB,aAAa,WAAW,QAAQ;AACpD,mBAAa,SAAS,EAAE,OAAO,mBAAmB,EAAE,OAAO,CAAC,MAAM,QAAQ,IAAI,CAAC;AAC/E,gBAAU,OAAO,WAAW,EAAE,OAAO,CAAC;AACtC,mBAAa,WAAW,SAAS,EAAE,OAAO,iBAAiB,EAAE,OAAO,IAAI;IAAE;AAEhF,aAAS,UAAU,oBAAoB,MAAM;AACvC,6BAAuB;AACvB,YAAM,gBAAgB,kBAAkB,OAAO,cAAc,EAAE,OAAM;AACrE,YAAM,YAAY,kBAAkB,OAAO,aAAa,EAAE,OAAM;AAEhE,YAAM,mBAAmB,QAAQ,OAAO,aAAa,EAAE,OAAO,WAAW,CAAC;AAC1E,YAAM,mBAAmB,QAAQ,OAAO,aAAa,EAAE,OAAO,eAAe,gBAAgB;AAE7F,YAAM,YAAY,qBAAqB;AACvC,YAAM,OAAO,QAAQ,OAAO,cAAc,CAAC,EAAE,OACzC,kBACA,WACA,KACA,SAAS;AAGb,UAAI,gBAAgB;AACpB,UAAI,WAAW;AACf,iBAAW,OAAO,MAAM;AACpB,cAAM,WAAW,QAAQ,OAAO,UAAU,EAAE,OAAO,IAAI,OAAO,WAAW,EAAE,OAAM,GAAI,aAAa;AAClG,YAAI,WAAW,eAAe;AAC1B,qBAAW;AACX,0BAAgB;QACpB;MACJ;AAEA,UAAI;AACJ,UAAI,WAAW;AACX,sBAAc,aAAa,UAAU,EAAE,OAAO,cAAc,EAAE,OAAM;MACxE,WAAW,YAAY,QAAQ,CAAC,SAAS,OAAM,GAAI;AAC/C,sBAAc,SAAS,OAAO,WAAW,EAAE,OAAM;MACrD,OAAO;AACH,cAAM,eAAe,QAAQ,OAAO,aAAa,EAAE,OAAO,WAAW,GAAG;AACxE,sBAAc,QAAQ,OAAO,aAAa,EAAE,OAAO,eAAe,YAAY;MAClF;AAEA,UAAI,QAAQ,OAAO,aAAa,EAAE,OAAO,aAAa,UAAU,GAAG;AAC/D,cAAM,eAAe,QAAQ,OAAO,aAAa,EAAE,OAAO,WAAW,GAAG;AACxE,sBAAc,QAAQ,OAAO,aAAa,EAAE,OAAO,eAAe,YAAY;MAClF;AAEA,UAAI,cAAc,MAAM;AACpB,qBAAa,aAAa,aAAa,oBAAoB,CAAC,KAAK,KAAK,GAAG,GAAG,GAAG,CAAC,GAAG,GAAG,GAAG,CAAC,CAAC;MAC/F;AAEA,iBAAW,OAAO,WAAW,EAAE,OAAO,IAAI;AAC1C,YAAM,mBAAmB,aAAa,UAAU;AAChD,uBAAiB,OAAO,cAAc,EAAE,OAAO,WAAW;AAE1D,YAAM,kBAAkB,aAAa,YAAY,QAAQ;AACzD,YAAM,WAAW,gBAAgB,OAAO,cAAc,EAAE,OAAM;AAE9D,eAAS,OAAO,YAAY,EAAE,OAAO,UAAU;AAE/C,YAAM,eAAgB,aAAa,cAAe,qBAAqB;AACvE,eAAS,OAAO,WAAW,EAAE,OAAO,YAAY;AAEhD,YAAM,WAAW,aAAa,YAAY,QAAQ;AAClD,UAAI,YAAY,MAAM;AAClB,gBAAQ,QAAQ;MACpB;AAEA,UAAI,WAAW,MAAM;AACjB,cAAM,UAAU,aAAa,YAAY,oBAAoB,WAAW,GAAG,CAAC,GAAG,GAAG,GAAG,CAAC,CAAC;AACvF,kBAAU,aAAa,SAAS,YAAY;MAChD,OAAO;AACH,gBAAQ,OAAO,gBAAgB,EAAE,OAAM,EAAG,OAAO,WAAW,EAAE,OAAO,IAAI;MAC7E;AAEA,YAAM,eAAe,QAAQ,OAAO,cAAc,EAAE,OAAM;AAC1D,mBAAa,OAAO,YAAY,EAAE,OAAO,UAAU;AAEnD,cAAQ,OAAO,gBAAgB,EAAE,OAAO,OAAO;AAC/C,cAAQ,OAAO,cAAc,EAAE,OAAO,OAAO;AAE7C,YAAM,YAAY;AAClB,cAAQ,OAAO,gBAAgB,EAAE,OAAO,SAAS;AACjD,cAAQ,OAAO,cAAc,EAAE,OAAO,SAAS;AAE/C,cAAQ,OAAO,mBAAmB,EAAE,OAAO,CAAC;AAC5C,cAAQ,OAAO,mBAAmB,EAAE,OAAO,IAAI;AAG/C,cAAQ,OAAO,aAAa,EAAE,OAAO,GAAG,aAAa;AACrD,cAAQ,OAAO,aAAa,EAAE,OAAO,GAAG,WAAW;AAEnD,UAAI,eAAe,WAAW;AAC1B,cAAM,OAAO;AACb,gBAAQ,OAAO,mBAAmB,EAAE,OAAO,IAAI;AAC/C,gBAAQ,OAAO,aAAa,EAAE,OAAO,GAAG,aAAa;AAErD,iBAAS,IAAI,GAAG,IAAK,OAAO,GAAI,KAAK;AACjC,gBAAM,IAAI,KAAK,OAAO;AACtB,gBAAM,WAAW,QAAQ,OAAO,MAAM,EAAE,OAAO,eAAe,aAAa,CAAC;AAE5E,gBAAM,cAAc,KAAK,OAAM;AAC/B,cAAI,SAAS;AAEb,cAAI,cAAc,MAAM;AACpB,qBAAS;cACJ,KAAK,OAAM,IAAK,MAAO;cACvB,KAAK,OAAM,IAAK,MAAO;cACvB,KAAK,OAAM,IAAK,MAAO;;UAEhC;AAEA,gBAAM,gBAAgB,QAAQ,OAAO,aAAa,EAAE,OAAO,UAAU,MAAM;AAC3E,kBAAQ,OAAO,aAAa,EAAE,OAAO,GAAG,aAAa;QACzD;AAEA,gBAAQ,OAAO,aAAa,EAAE,OAAO,OAAO,GAAG,WAAW;MAC9D;AAEA,aAAO,EAAE,KAAK,UAAU,YAAY,WAAU;IAAG;AAGrD,aAAS,eAAe;AACpB,YAAM,gBAAgB,aAAa,IAAI;AACvC,UAAI,WAAW;AACf,UAAI,WAAW;AACX,oBAAY,mBAAmB,OAAO,cAAc,EAAE,OAAM;AAC5D,oBAAY,mBAAmB,OAAO,cAAc,EAAE,OAAM;AAC5D,oBAAY,WAAW,OAAO,aAAa,EAAE,OAAO,WAAW,WAAW,OAAO,OAAO,EAAE,OAAO,GAAG,GAAG,GAAG,CAAC;MAC/G,OAAO;AACH,oBAAY,kBAAkB,OAAO,cAAc,EAAE,OAAM;AAC3D,oBAAY,kBAAkB,OAAO,cAAc,EAAE,OAAM;MAC/D;AACA,UAAI,UAAU;AACV,cAAM,UAAU,cAAc,OAAO,cAAc,EAAE,OAAM;AAC3D,cAAM,WAAW,QAAQ,OAAO,UAAU,EAAE,OAAO,SAAS,UAAU;AACtE,YAAI,WAAW,GAAG;AACd,wBAAc,OAAO,cAAc,EAAE,OAAO,SAAS;AACrD,wBAAc,OAAO,cAAc,EAAE,OAAO,SAAS;QACzD,OAAO;AACH,wBAAc,OAAO,cAAc,EAAE,OAAO,QAAQ,OAAO,MAAM,EAAE,OAAO,SAAS,WAAW,YAAY,EAAE,CAAC;AAC7G,wBAAc,OAAO,cAAc,EAAE,OAAO,WAAW,OAAO,OAAO,EAAE,OAAO,cAAc,OAAO,cAAc,EAAE,OAAM,GAAI,WAAW,YAAY,EAAE,CAAC;QAC3J;MACJ,OAAO;AACH,sBAAc,OAAO,cAAc,EAAE,OAAO,SAAS;AACrD,sBAAc,OAAO,cAAc,EAAE,OAAO,SAAS;MACzD;IAAC;IAaL,MAAM,WAAU;MACZ;MACA;MACA;MACA;MACA;MACA;MACA;MAEA,YAAY,QAA0B;AAClC,aAAK,aAAe,OAAO;AAC3B,aAAK,SAAe,OAAO;AAC3B,aAAK,eAAe,OAAO;AAC3B,aAAK,gBAAgB,OAAO;AAC5B,aAAK,cAAe,OAAO,eAAe;AAC1C,aAAK,UAAe,OAAO,WAAW;AACtC,aAAK,UAAe,OAAO,WAAW;MAAM;;AAIpD,UAAM,UAA0B;MACpC;QACY,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,8BAAkB;AAAG,0BAAc;UAAE;UACrD,aAAa;SAChB;;MAGb;QACY,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AACV,kBAAM,WAAW,KAAK,KAAK,QAAQ,eAAe,EAAE,SAAS,cAAc,IAAI;AAC/E;AACA,gBAAI,cAAc;AAAG,4BAAc;UAAS;UAEhD,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AACV,kBAAM,WAAW,KAAK,KAAK,QAAQ,eAAe,EAAE,SAAS,cAAc,IAAI;AAC/E;AACA,2BAAe,WAAW;UAAE;UAEhC,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,8BAAkB;AAAG,0BAAc;UAAE;UACrD,aAAa;SAChB;;MAGb;QACY,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,8BAAkB;AAAG,0BAAc;UAAE;UACrD,aAAa;SAChB;QACL,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,0BAAa;UAAG;UAChC,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,8BAAiB;UAAG;UACpC,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,uBAAU;UAAG;UAC7B,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,2BAAc;UAAG;UACjC,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,2BAAc;UAAG;UACjC,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,6BAAgB;UAAG;UACnC,aAAa;SAChB;QAGG,IAAI,WAAW;UACX,YAAY;UACZ,aAAa;UACb,QAAQ,MAAM;AAAE,yBAAa,CAAC;AAAG,uBAAU;UAAG;SACjD;QACD,IAAI,WAAW;UACX,YAAY;UACZ,aAAa;UACb,QAAQ,MAAM;AAAE,yBAAa,CAAC;AAAG,uBAAU;UAAG;SACjD;QACD,IAAI,WAAW;UACX,YAAY;UACZ,aAAa;UACb,QAAQ,MAAM;AAAE,yBAAa,CAAC;AAAG,uBAAU;UAAG;SACjD;QACD,IAAI,WAAW;UACX,YAAY;UACZ,aAAa;UACb,QAAQ,MAAM;AAAE,yBAAa,CAAC;AAAG,uBAAU;UAAG;SACjD;;;AAIT,QAAI,YAAqC,oBAAI,IAAG;AAChD,YAAQ,KAAI,EAAG,QAAQ,YAAU;AAAE,gBAAU,IAAI,OAAO,YAAY,MAAM;IAAE,CAAE;AAE9E,aAAS,SAAS,YAAgC;AAAE,aAAO,UAAU,IAAI,UAAU;IAAE;AAErF,aAAS,mBAAyB;AAC9B,kBAAY,oBAAI,IAAG;AACnB,cAAQ,KAAI,EAAG,QAAQ,YAAU;AAAE,YAAI;AAAQ,oBAAU,IAAI,OAAO,YAAY,MAAM;MAAE,CAAE;IAAE;AAIhG,aAAS,UAAU;AACf,UAAI;AAAE,YAAI,cAAc;AAAM,qBAAW,OAAO,WAAW,EAAE,OAAO,KAAK;MAAG,SAAS,GAAG;MAAE;AAC1F,UAAI;AACA,cAAM,UAAU,QAAQ,OAAO,gBAAgB,EAAE,OAAM;AACvD,YAAI,WAAW,QAAQ,CAAC,QAAQ,OAAM;AAAI,kBAAQ,OAAO,WAAW,EAAE,OAAO,KAAK;MACtF,SAAS,GAAG;MAAE;IAAC;AAGnB,UAAM,aAAa,QAAQ,uBAAuB,uBAAuB;AAGzE,QAAI,gBAAqB;AACzB,QAAI,kBAAkB;AACtB,aAAS,aAAkB;AACvB,UAAI;AACA,cAAM,MAAM,KAAK,IAAG;AACpB,YAAI,iBAAiB,QAAQ,cAAc,OAAM,KAAO,MAAM,kBAAkB,KAAO;AACnF,4BAAkB;AAClB,0BAAgB;AAChB,cAAI,gBAAgB,MAAM;AACtB,kBAAM,MAAM,kBAAkB,YAAY;AAC1C,qBAAS,IAAI,GAAG,IAAI,IAAI,QAAQ,KAAK;AACjC,kBAAI;AACA,sBAAM,OAAO,IAAI,IAAI,CAAC;AACtB,oBAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM,GAAI;AAAE,kCAAgB;AAAM;gBAAO;cACvE,SAAS,GAAG;cAAE;YAClB;UACJ;QACJ;MACJ,SAAS,GAAG;MAAE;AACd,aAAO;IAAc;AAGzB,QAAI,aAAkB;AACtB,QAAI,eAAe;AACnB,aAAS,UAAe;AACpB,UAAI;AACA,cAAM,MAAM,KAAK,IAAG;AACpB,YAAI,cAAc,QAAQ,WAAW,OAAM,KAAO,MAAM,eAAe,KAAO;AAC1E,yBAAe;AACf,uBAAa;AACb,cAAI,aAAa,MAAM;AACnB,kBAAM,MAAM,kBAAkB,SAAS;AACvC,qBAAS,IAAI,GAAG,IAAI,IAAI,QAAQ,KAAK;AACjC,kBAAI;AACA,sBAAM,OAAO,IAAI,IAAI,CAAC;AACtB,oBAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM,GAAI;AAAE,+BAAa;AAAM;gBAAO;cACpE,SAAS,GAAG;cAAE;YAClB;UACJ;QACJ;MACJ,SAAS,GAAG;MAAE;AACd,aAAO;IAAW;AAGtB,QAAI,gBAAqB;AACzB,QAAI,kBAAkB;AACtB,aAAS,eAAoB;AACzB,UAAI;AACA,cAAM,MAAM,KAAK,IAAG;AACpB,YAAI,iBAAiB,QAAQ,cAAc,OAAM,KAAO,MAAM,kBAAkB,KAAO;AACnF,4BAAkB;AAClB,0BAAgB;AAChB,cAAI,wBAAwB,MAAM;AAC9B,gBAAI;AAAE,8BAAgB,qBAAqB,OAAO,aAAa,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UAC7F;QACJ;MACJ,SAAS,GAAG;MAAE;AACd,aAAO;IAAc;AAGzB,UAAM,mBAAmB,MAAc;AACnC,UAAI;AAAE,eAAO,cAAc,OAAO,iBAAiB,EAAE,OAAM,EAAG,OAAO,iBAAiB,EAAE,OAAM;MAAI,SAAS,GAAG;AAAE,eAAO;MAAI;IAAC;AAGhI,aAAS,gBAAqB;AAC1B,UAAI;AACA,cAAM,MAAM,aAAY;AACxB,YAAI,OAAO,QAAQ,IAAI,OAAM;AAAI,iBAAO;AACxC,cAAM,OAAO,IAAI,MAAM,SAAS,EAAE;AAClC,YAAI,QAAQ,QAAQ,KAAK,OAAM;AAAI,iBAAO;AAC1C,eAAO;MACX,SAAS,GAAG;AAAE,eAAO;MAAM;IAAC;AAGhC,aAAS,yBAA8B;AACnC,UAAI;AACA,cAAM,MAAM,aAAY;AACxB,YAAI,OAAO,QAAQ,IAAI,OAAM;AAAI,iBAAO;AACxC,cAAM,KAAK,IAAI,MAAM,aAAa,EAAE;AACpC,YAAI,MAAM,QAAQ,CAAC,GAAG,OAAM;AAAI,iBAAO;MAC3C,SAAS,GAAG;MAAE;AACd,aAAO;IAAK;AAGhB,aAAS,oBAAyB;AAC9B,UAAI;AACA,YAAI,kBAAkB;AAAM,iBAAO;AACnC,cAAM,MAAM,kBAAkB,cAAc;AAC5C,iBAAS,IAAI,GAAG,IAAI,IAAI,QAAQ,KAAK;AACjC,cAAI;AACA,kBAAM,IAAI,IAAI,IAAI,CAAC;AACnB,kBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,gBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC5B,kBAAI;AAAE,oBAAI,GAAG,OAAO,YAAY,EAAE,OAAM;AAAI,yBAAO;cAAG,SAAS,GAAG;cAAE;YACxE;UACJ,SAAS,GAAG;UAAE;QAClB;AACA,YAAI,IAAI,SAAS,GAAG;AAAE,cAAI;AAAE,mBAAO,IAAI,IAAI,CAAC;UAAG,SAAS,GAAG;UAAE;QAAE;MACnE,SAAS,GAAG;MAAE;AACd,aAAO;IAAK;AAGhB,aAAS,SAAS,GAAa;AAC3B,UAAI;AACA,YAAI,kBAAkB;AAAM,iBAAO;AACnC,cAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,YAAI,MAAM,QAAQ,GAAG,OAAM;AAAI,iBAAO;AACtC,eAAO,GAAG,OAAO,gBAAgB,CAAC,EAAE,QAAQ,cAAc,EAAE,OAAM;MACtE,SAAS,GAAG;AAAE,eAAO;MAAM;IAAC;AAGhC,aAAS,OAAO,IAAS,MAAc,QAAgB,MAAsB;AACzE,UAAI;AACA,YAAI,MAAM,QAAQ,GAAG,OAAM;AAAI,iBAAO;AACtC,WAAG,OAAO,OAAO,CAAC,EAAE,OAAO,OAAO,OAAO,IAAI,GAAG,QAAQ,IAAI;AAC5D,eAAO;MACX,SAAS,GAAG;AAAE,eAAO;MAAO;IAAC;AAGjC,aAAS,mBAAmB,IAA8C;AACtE,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,OAAO,cAAa;AAC1B,cAAI,QAAQ;AAAM;AAClB,gBAAM,QAAQ,uBAAsB;AACpC,gBAAM,QAAQ,KAAK,OAAO,WAAW,EAAE,OAAM;AAC7C,mBAAS,IAAI,GAAG,IAAI,OAAO,KAAK;AAC5B,gBAAI;AACA,oBAAM,IAAI,KAAK,OAAO,UAAU,EAAE,OAAO,CAAC;AAC1C,kBAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B,kBAAI,UAAU;AACd,kBAAI,SAAS,QAAQ,CAAC,MAAM,OAAM,GAAI;AAClC,oBAAI;AAAE,sBAAI,MAAM,OAAO,OAAO,EAAE,MAAM;AAAG,8BAAU;gBAAM,SAAS,GAAG;gBAAE;cAC3E;AACA,iBAAG,GAAG,OAAO;YACjB,SAAS,GAAG;YAAE;UAClB;QACJ,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,QAAI,kBAAkB;AACtB,aAAS,iBAAiB;AACtB,YAAM,MAAM,KAAK,IAAG;AACpB,UAAI,MAAM,kBAAkB,KAAO;AAAE,yBAAiB,8BAA8B,OAAO,CAAC;AAAG;MAAQ;AACvG,wBAAkB;AAClB,cAAQ,IAAI,6BAA4B,oBAAI,KAAI,GAAG,mBAAkB,CAAE;AACvE,yBAAmB,CAAC,MAAM;AACtB,YAAI;AACA,gBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,cAAI,MAAM,QAAQ,GAAG,OAAM;AAAI;AAC/B,iBAAO,IAAI,cAAc,GAAG,CAAA,CAAE;AAC9B,cAAI;AACA,kBAAM,QAAQ,GAAG,OAAO,WAAW,EAAE,OAAM;AAC3C,gBAAI,SAAS,QAAQ,CAAC,MAAM,OAAM,GAAI;AAClC,iBAAG,OAAO,OAAO,CAAC,EAAE,SAAS,iBAAiB,0BAA0B,iBAAiB,EAAE,OAAO,OAAO,OAAO,YAAY,GAAG,OAAO,CAAA,CAAE;YAC5I;UACJ,SAAS,GAAG;UAAE;AACd,cAAI;AAAE,mBAAO,IAAI,cAAc,GAAG,CAAA,CAAE;UAAG,SAAS,GAAG;UAAE;QACzD,SAAS,GAAG;QAAE;MAAC,CAClB;AACD,sBAAe;AACf,uBAAiB,uBAAuB,OAAO,CAAC;IAAE;AAGtD,aAAS,qBAAqB;AAC1B,cAAQ,IAAI,2BAA0B,oBAAI,KAAI,GAAG,mBAAkB,CAAE;AACrE,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,MAAW;AACf,cAAI;AAAE,kBAAM,mBAAmB,OAAO,cAAc,EAAE,OAAM;UAAI,SAAS,GAAG;UAAE;AAC9E,cAAI,OAAO,MAAM;AAAE,gBAAI;AAAE,oBAAM,SAAS,OAAO,qBAAqB,EAAE,OAAM,EAAG,OAAO,cAAc,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UAAE;AAChI,cAAI,OAAO;AAAM;AACjB,gBAAM,IAAI,IAAI,MAAM,GAAG,EAAE;AACzB,gBAAM,IAAI,IAAI,MAAM,GAAG,EAAE;AACzB,gBAAM,IAAI,IAAI,MAAM,GAAG,EAAE;AACzB,cAAI,KAAU;AACd,cAAI;AAAE,iBAAK,QAAQ,OAAO,OAAO,EAAE,OAAO,GAAG,GAAG,CAAC;UAAG,SAAS,GAAG;UAAE;AAClE,cAAI,MAAM,MAAM;AAAE,gBAAI;AAAE,mBAAK,KAAK,GAAG,GAAG,CAAC;YAAG,SAAS,GAAG;YAAE;UAAE;AAC5D,6BAAmB,CAAC,MAAM;AACtB,gBAAI;AACA,oBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,qBAAO,IAAI,gBAAgB,GAAG,CAAC,EAAE,CAAC;YACtC,SAAS,GAAG;YAAE;UAAC,CAClB;AACD,0BAAe;AACf,2BAAiB,8BAA8B,OAAO,CAAC;QAC3D,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,kBAAkB;AACvB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,QAAa;AACjB,cAAI;AAAE,oBAAQ,SAAS,OAAO,qBAAqB,EAAE,OAAM,EAAG,OAAO,cAAc,EAAE,OAAM;UAAI,SAAS,GAAG;UAAE;AAC7G,cAAI,SAAS,MAAM;AAAE,gBAAI;AAAE,sBAAQ,mBAAmB,OAAO,cAAc,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UAAE;AACvG,cAAI,SAAS;AAAM;AACnB,gBAAM,KAAK,MAAM,MAAM,GAAG,EAAE,OAAO,KAAK,MAAM,MAAM,GAAG,EAAE,OAAO,KAAK,MAAM,MAAM,GAAG,EAAE;AACtF,gBAAM,KAAK,QAAQ,MAAM,UAAU,EAAE;AACrC,6BAAmB,CAAC,MAAM;AACtB,gBAAI;AACA,oBAAM,OAAO,EAAE,MAAM,MAAM,EAAE;AAC7B,oBAAM,KAAK,KAAK,OAAO,cAAc,EAAE,OAAM;AAC7C,oBAAM,KAAK,GAAG,MAAM,GAAG,EAAE,QAAQ;AACjC,oBAAM,KAAK,GAAG,MAAM,GAAG,EAAE,QAAQ;AACjC,oBAAM,KAAK,GAAG,MAAM,GAAG,EAAE,QAAQ;AACjC,kBAAI,MAAM,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,EAAE;AAC/C,kBAAI,MAAM;AAAO,sBAAM;AACvB,kBAAI,MAAW;AACf,kBAAI;AAAE,sBAAM,QAAQ,OAAO,OAAO,EAAE,OAAO,KAAK,KAAK,KAAK,MAAM,KAAK,KAAK,GAAG;cAAG,SAAS,GAAG;cAAE;AAC9F,kBAAI,OAAO,MAAM;AAAE,oBAAI;AAAE,wBAAM,KAAK,KAAK,KAAK,KAAK,MAAM,KAAK,KAAK,GAAG;gBAAG,SAAS,GAAG;gBAAE;cAAE;AACzF,oBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,qBAAO,IAAI,mBAAmB,GAAG,CAAC,GAAG,CAAC;YAC1C,SAAS,GAAG;YAAE;UAAC,CAClB;AACD,0BAAe;AACf,2BAAiB,oBAAoB,OAAO,CAAC;QACjD,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,iBAAiB;AACtB,yBAAmB,CAAC,MAAM;AACtB,YAAI;AACA,gBAAM,MAAM,SAAS,CAAC;AACtB,cAAI,OAAO,QAAQ,CAAC,IAAI,OAAM,GAAI;AAC9B,gBAAI;AAAE,kBAAI,OAAO,kBAAkB,EAAE,OAAO,GAAG;YAAG,SAAS,GAAG;YAAE;UACpE;QACJ,SAAS,GAAG;QAAE;MAAC,CAClB;AACD,sBAAe;AACf,uBAAiB,mBAAmB,OAAO,CAAC;IAAE;AAGlD,aAAS,iBAAiB;AACtB,yBAAmB,CAAC,MAAM;AACtB,YAAI;AACA,gBAAM,MAAM,SAAS,CAAC;AACtB,cAAI,OAAO,QAAQ,CAAC,IAAI,OAAM,GAAI;AAC9B,gBAAI;AAAE,kBAAI,OAAO,gBAAgB,EAAE,OAAO,GAAG;YAAG,SAAS,GAAG;YAAE;UAClE;QACJ,SAAS,GAAG;QAAE;MAAC,CAClB;AACD,sBAAe;AACf,uBAAiB,mBAAmB,OAAO,CAAC;IAAE;AAGlD,aAAS,gBAAgB;AACrB,yBAAmB,CAAC,MAAM;AACtB,YAAI;AACA,gBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,iBAAO,IAAI,iBAAiB,GAAG,CAAC,CAAC,CAAC;QACtC,SAAS,GAAG;QAAE;MAAC,CAClB;AACD,sBAAe;AACf,uBAAiB,0BAA0B,OAAO,CAAC;IAAE;AAGzD,aAAS,kBAAkB;AACvB,yBAAmB,CAAC,MAAM;AACtB,YAAI;AACA,gBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,iBAAO,IAAI,oBAAoB,GAAG,CAAA,CAAE;QACxC,SAAS,GAAG;QAAE;MAAC,CAClB;AACD,sBAAe;AACf,uBAAiB,6BAA6B,OAAO,CAAC;IAAE;AAG5D,aAAS,QAAQ,MAAe;AAC5B,yBAAmB,CAAC,MAAM;AACtB,YAAI;AAAE,YAAE,OAAO,aAAa,EAAE,OAAO,IAAI;QAAG,SAAS,GAAG;QAAE;MAAC,CAC9D;AACD,uBAAiB,OAAO,mBAAmB,oBAAoB,OAAO,CAAC;IAAE;AAG7E,aAAS,WAAW,MAAe;AAC/B,yBAAmB,CAAC,MAAM;AACtB,YAAI;AAAE,YAAE,OAAO,oBAAoB,EAAE,OAAO,IAAI;QAAG,SAAS,GAAG;QAAE;MAAC,CACrE;AACD,uBAAiB,OAAO,oBAAoB,kBAAkB,OAAO,CAAC;IAAE;AAG5E,aAAS,QAAQ,MAAe;AAC5B,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,KAAK,iBAAgB;AAC3B,6BAAmB,CAAC,MAAM;AACtB,gBAAI;AACA,oBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,kBAAI;AAAM,uBAAO,IAAI,kBAAkB,GAAG,CAAC,IAAI,KAAK,CAAC;;AAChD,uBAAO,IAAI,qBAAqB,GAAG,CAAA,CAAE;YAC9C,SAAS,GAAG;YAAE;UAAC,CAClB;AACD,0BAAe;AACf,2BAAiB,OAAO,qBAAqB,qBAAqB,OAAO,CAAC;QAC9E,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,QAAI,iBAAiB;AACrB,aAAS,WAAW,IAAa;AAC7B,uBAAiB;AACjB,uBAAiB,KAAK,gCAAgC,eAAe,OAAO,CAAC;IAAE;AAGnF,aAAS,WAAW,YAAoB,WAA0B,IAAa;AAC3E,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,QAAO;AACjB,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,2BAA2B,OAAO,CAAC;AAAG;UAAQ;AAC9F,gBAAM,OAAO;AACb,cAAI,aAAa,MAAM;AACnB,gBAAI;AACA,oBAAM,MAAM,EAAE,MAAM,SAAS,EAAE;AAC/B,kBAAI,QAAQ;AAAM,kBAAE,OAAO,UAAU,EAAE,OAAM;YACjD,SAAS,GAAG;AACR,kBAAI;AAAE,kBAAE,OAAO,UAAU,EAAE,OAAM;cAAI,SAAS,IAAI;cAAE;YACxD;UACJ,OAAO;AACH,gBAAI;AAAE,gBAAE,OAAO,UAAU,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UACvD;QACJ,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,iBAAiB;AACtB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,QAAO;AACjB,cAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B,YAAE,OAAO,gBAAgB,EAAE,OAAM;AACjC,2BAAiB,qBAAqB,OAAO,CAAC;QAClD,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,SAAS,UAAmB;AACjC,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,QAAO;AACjB,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,2BAA2B,OAAO,CAAC;AAAG;UAAQ;AAC9F,YAAE,OAAO,cAAc,EAAE,OAAO,QAAQ;QAC5C,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,YAAY,WAAmB,OAAe,SAAwB;AAC3E,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,WAAU;AACpB,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,qBAAqB,OAAO,CAAC;AAAG;UAAQ;AACxF,YAAE,MAAM,SAAS,EAAE,QAAQ;AAC3B,cAAI,WAAW,MAAM;AAAE,gBAAI;AAAE,gBAAE,OAAO,OAAO,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UAAE;QAC7E,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,QAAI,QAAQ;AACZ,QAAI,cAAc;AAClB,QAAI,aAAa;AACjB,QAAI,cAAc;AAClB,QAAI,oBAAoB;AACxB,QAAI,iBAAiB;AACrB,QAAI,eAAe;AACnB,QAAI,kBAAkB;AACtB,QAAI,kBAAuB;AAC3B,QAAI,iBAAsB;AAC1B,QAAI,YAAiB;AAErB,aAAS,WAAW,UAA+F,IAAa;AAC5H,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,WAAU;AACpB,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,qBAAqB,OAAO,CAAC;AAAG;UAAQ;AACxF,cAAI,YAAY;AAChB,cAAI,UAAU;AACd,cAAI,aAAa,aAAa;AAAE,wBAAY;AAAiB,sBAAU;UAAoB,WAClF,aAAa,YAAY;AAAE,wBAAY;AAAa,sBAAU;UAAmB,WACjF,aAAa,aAAa;AAAE,wBAAY;AAAiB,sBAAU;UAAgB,WACnF,aAAa,mBAAmB;AAAE,wBAAY;AAAsB,sBAAU;UAAgB,WAC9F,aAAa,gBAAgB;AAAE,wBAAY;AAAiB,sBAAU;UAAgB;AAC/F,cAAI;AAAE,cAAE,MAAM,SAAS,EAAE,QAAQ;UAAI,SAAS,GAAG;UAAE;AACnD,cAAI;AAAE,cAAE,OAAO,OAAO,EAAE,OAAM;UAAI,SAAS,GAAG;UAAE;QACpD,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,WAAW;AAChB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,MAAM,kBAAiB;AAC7B,cAAI,OAAO,MAAM;AAAE,6BAAiB,sBAAsB,OAAO,CAAC;AAAG;UAAQ;AAC7E,cAAI;AAAE,gBAAI,OAAO,MAAM,EAAE,OAAO,GAAG;UAAG,SAAS,GAAG;UAAE;AACpD,cAAI;AAAE,gBAAI,OAAO,mBAAmB,EAAE,OAAO,GAAG;UAAG,SAAS,GAAG;UAAE;AACjE,2BAAiB,WAAW,OAAO,CAAC;QACxC,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,aAAa;AAClB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,MAAM;AACZ,cAAI,OAAO;AACX,cAAI,oBAAoB,MAAM;AAC1B,kBAAM,UAAU,kBAAkB,gBAAgB;AAClD,qBAAS,IAAI,GAAG,IAAI,QAAQ,QAAQ,KAAK;AACrC,kBAAI;AACA,sBAAM,IAAI,QAAQ,IAAI,CAAC;AACvB,oBAAI;AAAE,oBAAE,MAAM,eAAe,EAAE,QAAQ;gBAAK,SAAS,GAAG;gBAAE;AAC1D,uBAAO;cACX,SAAS,GAAG;cAAE;YAClB;UACJ;AACA,cAAI,oBAAoB,MAAM;AAC1B,gBAAI;AAAE,+BAAiB,OAAO,QAAQ,EAAE,OAAO,OAAO,OAAO,eAAe,GAAG,GAAG;YAAG,SAAS,GAAG;YAAE;AACnG,gBAAI;AAAE,+BAAiB,OAAO,MAAM,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UAClE;AACA,cAAI;AACA,gBAAI,uBAAuB,MAAM;AAC7B,oBAAM,MAAM,oBAAoB,OAAO,cAAc,EAAE,OAAM;AAC7D,kBAAI,OAAO,QAAQ,CAAC,IAAI,OAAM;AAAI,oBAAI,OAAO,qBAAqB,EAAE,OAAO,GAAG;YAClF;UACJ,SAAS,GAAG;UAAE;AACd,2BAAiB,OAAO,mBAAmB,qCAAqC,OAAO,CAAC;QAC5F,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,sBAAsB;AAC3B,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,oBAAoB;AAAM;AAC9B,gBAAM,UAAU,kBAAkB,gBAAgB;AAClD,mBAAS,IAAI,GAAG,IAAI,QAAQ,QAAQ,KAAK;AACrC,gBAAI;AACA,oBAAM,IAAI,QAAQ,IAAI,CAAC;AACvB,oBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,kBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM;AAAI,mBAAG,OAAO,OAAO,CAAC,EAAE,OAAO,OAAO,OAAO,uBAAuB,GAAG,GAAG,CAAC,MAAM,CAAC;YAClH,SAAS,GAAG;YAAE;UAClB;AACA,0BAAe;AACf,2BAAiB,mCAAmC,OAAO,CAAC;QAChE,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,qBAAqB,IAAa;AACvC,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,iBAAiB;AAAM;AAC3B,gBAAM,OAAO,kBAAkB,aAAa;AAC5C,mBAAS,IAAI,GAAG,IAAI,KAAK,QAAQ,KAAK;AAClC,gBAAI;AAAE,mBAAK,IAAI,CAAC,EAAE,MAAM,oBAAoB,EAAE,QAAQ;YAAI,SAAS,GAAG;YAAE;UAC5E;AACA,2BAAiB,KAAK,wBAAwB,wBAAwB,OAAO,CAAC;QAClF,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,QAAI,aAAmC,CAAA;AACvC,aAAS,eAAe,WAAwB;AAC5C,YAAM,SAAS,UAAU,YAAW,EAAG,QAAQ,QAAQ,EAAE,EAAE,KAAI;AAC/D,UAAI,OAAY;AAChB,UAAI;AACA,cAAM,MAAM,oBAAoB,OAAO,cAAc,EAAE,OAAM;AAC7D,YAAI,OAAO,QAAQ,CAAC,IAAI,OAAM,GAAI;AAC9B,gBAAM,IAAI,IAAI,MAAM,SAAS,EAAE;AAC/B,cAAI,KAAK,QAAQ,CAAC,EAAE,OAAM;AAAI,mBAAO;QACzC;MACJ,SAAS,GAAG;AAAE,gBAAQ,IAAI,qCAAqC,CAAC;MAAG;AACnE,UAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM;AAAI,eAAO;AAC3C,UAAI,UAAU;AACd,UAAI,WAAgB;AACpB,YAAM,UAAoB,CAAA;AAC1B,UAAI;AACA,cAAM,MAAM,OAAO,OAAO,mBAAmB,EAAE,SAAS,eAAe,gBAAgB,EAAE,OAAO,WAAW,KAAK,QAAQ,IAAI;AAC5H,YAAI,OAAO,MAAM;AACb,mBAAS,IAAI,GAAG,IAAI,IAAI,QAAQ,KAAK;AACjC,gBAAI;AACA,oBAAM,IAAI,IAAI,IAAI,CAAC;AACnB,kBAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B;AACA,oBAAM,IAAI,EAAE,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,EAAG,YAAW;AAC9D,kBAAI,KAAK;AACT,kBAAI;AACA,sBAAM,IAAI,EAAE,OAAO,eAAe,EAAE,OAAM;AAC1C,sBAAM,SAAS,EAAE,OAAO,YAAY,EAAE,OAAM;AAC5C,oBAAI,UAAU,QAAQ,CAAC,OAAO,OAAM;AAAI,uBAAK,OAAO,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,EAAG,YAAW;cAC1G,SAAS,IAAI;cAAE;AACf,kBAAI,EAAE,QAAQ,MAAM,MAAM,MAAM,GAAG,QAAQ,MAAM,MAAM;AAAI;AAC3D,sBAAQ,KAAK,CAAC;AACd,oBAAM,aAAa,EAAE,QAAQ,MAAM,MAAM,MAAM,EAAE,QAAQ,MAAM,MAAM,MAAM,EAAE,QAAQ,SAAS,MAAM,MACjF,GAAG,QAAQ,MAAM,MAAM,MAAM,GAAG,QAAQ,MAAM,MAAM,MAAM,GAAG,QAAQ,SAAS,MAAM;AACvG,kBAAI,SAAS;AACb,kBAAI;AAAE,yBAAS,EAAE,OAAO,cAAc,EAAE,SAAS,aAAa,EAAE,OAAO,SAAS,KAAK,MAAM,KAAK;cAAM,SAAS,IAAI;cAAE;AACrH,kBAAI,cAAc,QAAQ;AAAE,uBAAO;AAAG;cAAO;AAC7C,kBAAI,YAAY;AAAM,2BAAW;YACrC,SAAS,IAAI;YAAE;UACnB;QACJ;MACJ,SAAS,GAAG;AAAE,gBAAQ,IAAI,6BAA6B,CAAC;MAAG;AAC3D,cAAQ,IAAI,yBAAyB,UAAU,mBAAmB,SAAS,iBAAiB,QAAQ,KAAK,IAAI,CAAC;AAC9G,UAAI,QAAQ;AAAM,eAAO;AACzB,aAAO;IAAK;AAGhB,aAAS,gBAAgB;AACrB,YAAM,QAAkB,CAAA;AACxB,YAAM,WAAqB,CAAA;AAC3B,UAAI,UAAU;AACd,UAAI;AACA,cAAM,MAAM,OAAO,OAAO,mBAAmB,EAAE,SAAS,eAAe,gBAAgB,EAAE,OAAO,WAAW,KAAK,QAAQ,IAAI;AAC5H,YAAI,OAAO,MAAM;AACb,mBAAS,IAAI,GAAG,IAAI,IAAI,QAAQ,KAAK;AACjC,gBAAI;AACA,oBAAM,IAAI,IAAI,IAAI,CAAC;AACnB,kBAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B;AACA,oBAAM,IAAI,EAAE,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,EAAG,YAAW;AAC9D,kBAAI,KAAK;AACT,kBAAI;AACA,sBAAM,IAAI,EAAE,OAAO,eAAe,EAAE,OAAM;AAC1C,sBAAM,SAAS,EAAE,OAAO,YAAY,EAAE,OAAM;AAC5C,oBAAI,UAAU,QAAQ,CAAC,OAAO,OAAM;AAAI,uBAAK,OAAO,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,EAAG,YAAW;cAC1G,SAAS,IAAI;cAAE;AACf,kBAAI,EAAE,QAAQ,MAAM,MAAM,MAAM,EAAE,QAAQ,MAAM,MAAM,MAAM,EAAE,QAAQ,SAAS,MAAM,MACjF,GAAG,QAAQ,MAAM,MAAM,MAAM,GAAG,QAAQ,MAAM,MAAM,MAAM,GAAG,QAAQ,SAAS,MAAM,IAAI;AACxF,oBAAI,SAAS;AACb,oBAAI;AAAE,2BAAS,EAAE,OAAO,gBAAgB,EAAE,OAAM,IAAK,WAAW;gBAAY,SAAS,IAAI;gBAAE;AAC3F,sBAAM,KAAK,IAAI,OAAO,SAAS,GAAG;cACtC;AACA,kBAAI,EAAE,QAAQ,OAAO,MAAM,MAAM,GAAG,QAAQ,OAAO,MAAM,IAAI;AACzD,oBAAI,SAAS;AACb,oBAAI;AAAE,2BAAS,EAAE,OAAO,gBAAgB,EAAE,OAAM,IAAK,WAAW;gBAAY,SAAS,IAAI;gBAAE;AAC3F,yBAAS,KAAK,IAAI,OAAO,SAAS,GAAG;cACzC;YACJ,SAAS,IAAI;YAAE;UACnB;QACJ;MACJ,SAAS,GAAG;AAAE,gBAAQ,IAAI,6BAA6B,CAAC;MAAG;AAC3D,cAAQ,IAAI,yBAAyB,UAAU,qCAAqC,MAAM,KAAK,IAAI,CAAC;AACpG,cAAQ,IAAI,uCAAuC,SAAS,KAAK,IAAI,CAAC;AACtE,UAAI;AACA,cAAM,MAAM,oBAAoB,OAAO,cAAc,EAAE,OAAM;AAC7D,YAAI,OAAO,QAAQ,CAAC,IAAI,OAAM,GAAI;AAC9B,gBAAM,IAAI,IAAI,MAAM,WAAW,EAAE,SAAS,OAAO,QAAQ;AACzD,gBAAM,IAAI,IAAI,MAAM,SAAS,EAAE,SAAS,OAAO,QAAQ;AACvD,gBAAM,IAAI,IAAI,MAAM,kBAAkB,EAAE,SAAS,OAAO,QAAQ;AAChE,kBAAQ,IAAI,2CAA2C,IAAI,cAAc,IAAI,uBAAuB,CAAC;AACrG,gBAAM,OAAO,IAAI,MAAM,cAAc,EAAE;AACvC,gBAAM,QAAkB,CAAA;AACxB,cAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM,GAAI;AAChC,qBAAS,KAAK,GAAG,KAAK,KAAK,QAAQ,MAAM;AACrC,kBAAI;AACA,sBAAM,MAAM,KAAK,IAAI,EAAE;AACvB,oBAAI,OAAO,QAAQ,CAAC,IAAI,OAAM,GAAI;AAAE,sBAAI;AAAE,0BAAM,KAAK,IAAI,OAAO,YAAY,EAAE,OAAM,EAAG,SAAQ,CAAE;kBAAG,SAAS,IAAI;kBAAE;gBAAE;cACzH,SAAS,IAAI;cAAE;YACnB;UACJ;AACA,kBAAQ,IAAI,uCAAuC,MAAM,KAAK,IAAI,CAAC;QACvE,OAAO;AACH,kBAAQ,IAAI,0CAA0C;QAC1D;MACJ,SAAS,IAAI;AAAE,gBAAQ,IAAI,iCAAiC,EAAE;MAAG;IAAC;AAGtE,aAAS,eAAe,WAAmB,OAAe;AACtD,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,OAAY;AAChB,cAAI,WAAW,SAAS,KAAK,MAAM;AAC/B,gBAAI;AAAE,kBAAI,CAAC,WAAW,SAAS,EAAE,OAAM;AAAI,uBAAO,WAAW,SAAS;;AAAQ,2BAAW,SAAS,IAAI;YAAM,SAAS,GAAG;AAAE,yBAAW,SAAS,IAAI;YAAM;UAC5J;AACA,cAAI,QAAQ;AAAM,mBAAO,eAAe,SAAS;AACjD,cAAI,QAAQ,QAAQ,KAAK,OAAM,GAAI;AAC/B,0BAAa;AACb;UACJ;AACA,qBAAW,SAAS,IAAI;AACxB,eAAK,OAAO,WAAW,EAAE,OAAO,KAAK;AACrC,2BAAiB,QAAQ,gBAAgB,OAAO,CAAC;QACrD,SAAS,GAAG;AACR,kBAAQ,IAAI,iBAAiB,QAAQ,oBAAoB,CAAC;QAC9D;MAAC,CACJ;IAAE;AAGP,aAAS,eAAe,OAAe;AACnC,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,iBAAiB;AAAM;AAC3B,gBAAM,OAAO,kBAAkB,aAAa;AAC5C,mBAAS,IAAI,GAAG,IAAI,KAAK,QAAQ,KAAK;AAClC,gBAAI;AACA,oBAAM,IAAI,KAAK,IAAI,CAAC;AACpB,oBAAM,MAAM,EAAE,MAAM,QAAQ,EAAE;AAC9B,gBAAE,MAAM,QAAQ,EAAE,QAAQ,KAAK,IAAI,GAAG,MAAM,KAAK;YACrD,SAAS,GAAG;YAAE;UAClB;QACJ,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,iBAAiB;AACtB,cAAQ,IAAI,0BAAyB,oBAAI,KAAI,GAAG,mBAAkB,CAAE;AACpE,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,WAAU;AACpB,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,qBAAqB,OAAO,CAAC;AAAG;UAAQ;AACxF,gBAAM,QAAQ,EAAE,MAAM,iBAAiB,EAAE;AACzC,gBAAM,IAAK,SAAS,QAAQ,MAAM,OAAM,IAAM,IAAI,MAAM;AACxD,cAAI,MAAM,GAAG;AAAE,6BAAiB,8BAA8B,OAAO,CAAC;AAAG;UAAQ;AACjF,gBAAM,MAAM,KAAK,MAAM,KAAK,OAAM,IAAK,CAAC;AACxC,gBAAM,KAAK,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC5C,cAAI,MAAM,QAAQ,CAAC,GAAG,OAAM;AAAI,eAAG,OAAO,OAAO,CAAC,EAAE,OAAO,OAAO,OAAO,oBAAoB,GAAG,GAAG,CAAC,GAAG,CAAC;AACxG,0BAAe;AACf,2BAAiB,6BAA6B,KAAK,OAAO,CAAC;QAC/D,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,SAAS,GAAW,GAAW,GAA6C;AACjF,YAAM,IAAI,KAAK,MAAM,IAAI,EAAE,IAAI;AAC/B,YAAM,IAAI,IAAI,KAAK,KAAK,MAAM,IAAI,EAAE;AACpC,YAAM,IAAI,KAAK,IAAI;AACnB,YAAM,IAAI,KAAK,IAAI,IAAI;AACvB,YAAM,IAAI,KAAK,KAAK,IAAI,KAAK;AAC7B,UAAI,IAAI,GAAG,IAAI,GAAG,IAAI;AACtB,UAAI,MAAM,GAAG;AAAE,YAAI;AAAG,YAAI;AAAG,YAAI;MAAG,WAC3B,MAAM,GAAG;AAAE,YAAI;AAAG,YAAI;AAAG,YAAI;MAAG,WAChC,MAAM,GAAG;AAAE,YAAI;AAAG,YAAI;AAAG,YAAI;MAAG,WAChC,MAAM,GAAG;AAAE,YAAI;AAAG,YAAI;AAAG,YAAI;MAAG,WAChC,MAAM,GAAG;AAAE,YAAI;AAAG,YAAI;AAAG,YAAI;MAAG,OACpC;AAAE,YAAI;AAAG,YAAI;AAAG,YAAI;MAAG;AAC5B,aAAO,CAAC,GAAG,GAAG,GAAG,CAAG;IAAE;AAG1B,aAAS,cAAc,GAAqC;AACxD,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,wBAAwB,MAAM;AAC9B,gBAAI;AAAE,mCAAqB,OAAO,WAAW,EAAE,OAAO,CAAC;YAAG,SAAS,GAAG;YAAE;UAC5E;AACA,gBAAM,IAAI,WAAU;AACpB,cAAI,KAAK,QAAQ,CAAC,EAAE,OAAM,GAAI;AAC1B,gBAAI;AACA,oBAAM,KAAK,QAAQ,OAAO,OAAO,EAAE,OAAO,EAAE,CAAC,GAAG,EAAE,CAAC,GAAG,EAAE,CAAC,CAAC;AAC1D,gBAAE,MAAM,mBAAmB,EAAE,QAAQ;YACzC,SAAS,GAAG;YAAE;AACd,gBAAI;AAAE,gBAAE,OAAO,cAAc,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UAC3D;QACJ,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAKP,QAAI,UAAU;AACd,QAAI,aAAa;AACjB,QAAI,SAAS;AACb,QAAI,UAAU;AACd,QAAI,oBAAoB;AACxB,QAAI,eAAoB;AACxB,QAAI,gBAAqB;AACzB,aAAS,gBAAgB,SAAkB;AACvC,YAAM,gBAAgB,kBAAkB,YAAY;AACpD,eAAS,IAAI,GAAG,IAAI,cAAc,QAAQ,KAAK;AAC3C,YAAI;AACA,gBAAM,eAAe,cAAc,IAAI,CAAC;AACxC,uBAAa,OAAO,aAAa,EAAE,OAAO,OAAO;QACrD,SAAS,GAAG;QAAE;MAClB;IAAC;AAEL,aAAS,kBAAkB;AACvB,UAAI,CAAC;AAAS;AACd,UAAI;AACA,YAAI,YAAY,QAAQ,SAAS,OAAM;AAAI;AAC3C,cAAM,KAAK,SAAS,OAAO,qBAAqB,EAAE,OAAM;AACxD,YAAI,MAAM,QAAQ,GAAG,OAAM;AAAI;AAC/B,YAAI;AAAE,aAAG,OAAO,gBAAgB,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AAC/D,YAAI,cAAc;AACd,gBAAM,UAAU,kBAAkB,OAAO,aAAa,EAAE,OAAM;AAC9D,gBAAM,QAAQ,QAAQ,OAAO,eAAe,CAAC,EAAE,OAAO,SAAS,EAAI;AACnE,aAAG,OAAO,oBAAoB,EAAE,OAAO,KAAK;QAChD,OAAO;AACH,gBAAM,KAAK,QAAQ,OAAO,SAAS,CAAC,EAAE,OAAO,GAAK,OAAO,WAAW,CAAG;AACvE,aAAG,OAAO,oBAAoB,EAAE,OAAO,EAAE;QAC7C;MACJ,SAAS,GAAG;MAAE;IAAC;AAEnB,aAAS,iBAAiB;AACtB,UAAI,CAAC;AAAQ;AACb,UAAI;AACA,YAAI,YAAY,QAAQ,SAAS,OAAM;AAAI;AAC3C,cAAM,KAAK,SAAS,OAAO,qBAAqB,EAAE,OAAM;AACxD,YAAI,MAAM,QAAQ,GAAG,OAAM;AAAI;AAC/B,YAAI;AAAE,aAAG,OAAO,gBAAgB,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AAC/D,YAAI,aAAa;AACb,gBAAM,UAAU,aAAa,iBAAiB,EAAE,OAAO,aAAa,EAAE,OAAM;AAC5E,gBAAM,QAAQ,QAAQ,OAAO,eAAe,CAAC,EAAE,OAAO,SAAS,EAAI;AACnE,aAAG,OAAO,oBAAoB,EAAE,OAAO,KAAK;QAChD,OAAO;AACH,gBAAM,KAAK,QAAQ,OAAO,SAAS,CAAC,EAAE,OAAO,GAAK,OAAO,WAAW,CAAG;AACvE,aAAG,OAAO,oBAAoB,EAAE,OAAO,EAAE;QAC7C;MACJ,SAAS,GAAG;MAAE;IAAC;AAEnB,QAAI,qBAAqC;AACzC,QAAI,aAA4B;AAChC,aAAS,gBAAgB;AACrB,UAAI,CAAC;AAAY;AACjB,UAAI;AACA,YAAI,YAAY,QAAQ,SAAS,OAAM;AAAI;AAC3C,YAAI,KAAU;AACd,YAAI;AAAE,eAAK,SAAS,OAAO,qBAAqB,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AAC1E,YAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC5B,cAAI;AAAE,eAAG,OAAO,gBAAgB,EAAE,OAAO,KAAK;UAAG,SAAS,GAAG;UAAE;AAC/D,cAAI;AAAE,eAAG,OAAO,oBAAoB,EAAE,OAAO,UAAU;UAAG,SAAS,GAAG;UAAE;QAC5E;AACA,YAAI;AACA,gBAAM,YAAY,aAAa,QAAQ;AACvC,gBAAM,MAAM,UAAU,OAAO,cAAc,EAAE,OAAM;AACnD,gBAAM,IAAI,IAAI,MAAM,GAAG,EAAE;AACzB,cAAI,eAAe,MAAM;AAAE,yBAAa;AAAG;UAAQ;AACnD,cAAI,KAAK,IAAI,IAAI,UAAU,IAAI,MAAM;AACjC,kBAAM,KAAK,QAAQ,OAAO,SAAS,CAAC,EAAE,OAAO,IAAI,MAAM,GAAG,EAAE,OAAO,YAAY,IAAI,MAAM,GAAG,EAAE,KAAK;AACnG,sBAAU,OAAO,cAAc,EAAE,OAAO,EAAE;UAC9C;QACJ,SAAS,GAAG;QAAE;MAClB,SAAS,GAAG;MAAE;IAAC;AAEnB,QAAI,wBAAwB;AAC5B,aAAS,qBAA8B;AACnC,UAAI;AACA,cAAM,aAAa,YAAY,OAAO,cAAc,EAAE,OAAM;AAC5D,YAAI,cAAc,QAAQ,WAAW,OAAM;AAAI,iBAAO;AACtD,mBAAW;AACX,YAAI;AACA,8BAAoB,SAAS,MAAM,mBAAmB,EAAE;AACxD,+BAAqB,SAAS,MAAM,oBAAoB,EAAE;AAC1D,yBAAe,SAAS,MAAM,cAAc,EAAE;AAC9C,yBAAe,SAAS,MAAM,cAAc,EAAE;QAClD,SAAS,GAAG;QAAE;AACd,YAAI;AAAE,4BAAkB,SAAS,OAAO,qBAAqB,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AACvF,eAAO;MACX,SAAS,GAAG;AACR,YAAI,CAAC,OAAO,CAAC,EAAE,SAAS,OAAO,KAAK,CAAC,OAAO,CAAC,EAAE,SAAS,kBAAkB,GAAG;AACzE,kBAAQ,IAAI,yBAAyB,CAAC,EAAE;QAC5C;MACJ;AACA,aAAO;IAAM;AAGjB,QAAI,mBAAmB;AACvB,UAAM,WAAW;AACjB,QAAI,gBAAwB;AAC5B,QAAI,eAAoB;AACxB,QAAI,aAAkB;AACtB,QAAI,eAAoB;AACxB,QAAI,aAAkB;AACtB,QAAI,gBAAqB;AACzB,QAAI,cAAmB;AACvB,aAAS,oBAAoB,QAAa;AACtC,UAAI;AACA,yBAAiB,MAAM;AAAE,cAAI;AAAE,mBAAO,aAAa,MAAM,EAAE,OAAO,gBAAgB,EAAE,OAAM,EAAG,MAAM,GAAG,EAAE;UAAO,SAAS,GAAG;AAAE,mBAAO;UAAG;QAAC,GAAG;AAC3I,cAAM,KAAK,OAAO,MAAM,cAAc,EAAE;AACxC,YAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC5B,yBAAe,aAAa,EAAE,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC/D,uBAAa,aAAa,EAAE,EAAE,OAAO,mBAAmB,EAAE,OAAM;QACpE,OAAO;AAAE,yBAAe;AAAM,uBAAa;QAAM;AACjD,cAAM,KAAK,OAAO,MAAM,cAAc,EAAE;AACxC,YAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC5B,yBAAe,aAAa,EAAE,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAC/D,uBAAa,aAAa,EAAE,EAAE,OAAO,mBAAmB,EAAE,OAAM;QACpE,OAAO;AAAE,yBAAe;AAAM,uBAAa;QAAM;AACjD,cAAM,KAAK,OAAO,MAAM,eAAe,EAAE;AACzC,YAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC5B,0BAAgB,aAAa,EAAE,EAAE,OAAO,gBAAgB,EAAE,OAAM;AAChE,wBAAc,aAAa,EAAE,EAAE,OAAO,mBAAmB,EAAE,OAAM;QACrE,OAAO;AAAE,0BAAgB;AAAM,wBAAc;QAAM;MACvD,SAAS,GAAG;MAAE;IAAC;AAGrB,aAAS,QAAQ,GAAG,GAAG,GAAG;AACxB,WAAK;AACL,WAAK;AACL,YAAM,IAAI,CAAC,OAAO,IAAI,IAAI,MAAM;AAChC,YAAM,IAAI,IAAI,KAAK,IAAI,GAAG,IAAI,CAAC;AAC/B,YAAM,IAAI,CAAC,MAAM,IAAI,IAAI,KAAK,IAAI,IAAI,KAAK,IAAI,EAAE,CAAC,IAAI,GAAG,KAAK,IAAI,IAAI,EAAE,CAAC,GAAG,CAAC,CAAC,CAAC;AAC/E,aAAO;QACL,KAAK,MAAM,MAAM,EAAE,CAAC,CAAC;QACrB,KAAK,MAAM,MAAM,EAAE,CAAC,CAAC;QACrB,KAAK,MAAM,MAAM,EAAE,CAAC,CAAC;;IACrB;AAGJ,aAAS,iBAAiB;AACxB,aAAO,MAAM,OAAO;AACpB,YAAM,CAAC,GAAG,GAAG,CAAC,IAAI,QAAQ,KAAK,KAAK,EAAE;AACtC,aAAO,EAAE,GAAG,IAAI,KAAK,GAAG,IAAI,KAAK,GAAG,IAAI,KAAK,GAAG,EAAG;IAAG;AAEtD,aAAS,qBAAqB;AAC1B,UAAI,CAAC;AAAkB;AACvB,UAAI;AACA,cAAM,SAAS,YAAY,OAAO,cAAc,EAAE,OAAM;AACxD,YAAI,UAAU,QAAQ,OAAO,OAAM;AAAI;AACvC,YAAI,2BAA2B,MAAM;AACjC,cAAI;AAAE,qCAAyB,OAAO,MAAM,cAAc,EAAE;UAAO,SAAS,GAAG;UAAE;QACrF;AACA,YAAI;AAAE,iBAAO,MAAM,cAAc,EAAE,QAAQ;QAAK,SAAS,GAAG;QAAE;AAC9D,cAAM,KAAK,aAAa,MAAM;AAC9B,YAAI,MAAM,QAAQ,GAAG,OAAM;AAAI;AAC/B,YAAI,kBAAkB,GAAG;AAAE,8BAAoB,MAAM;QAAG;AACxD,cAAM,MAAM,IAAM;AAClB,YAAI;AAAE,aAAG,OAAO,gBAAgB,EAAE,OAAO,CAAC,UAAU,UAAU,QAAQ,CAAC;QAAG,SAAS,GAAG;QAAE;AACxF,YAAI;AACA,gBAAM,KAAK,OAAO,MAAM,cAAc,EAAE;AACxC,cAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,KAAM,gBAAgB,MAAM;AACpD,kBAAM,MAAM,aAAa,EAAE;AAC3B,gBAAI,OAAO,gBAAgB,EAAE,OAAO,CAAC,aAAa,MAAM,GAAG,EAAE,QAAQ,KAAK,aAAa,MAAM,GAAG,EAAE,QAAQ,KAAK,aAAa,MAAM,GAAG,EAAE,QAAQ,GAAG,CAAC;AACnJ,gBAAI,OAAO,mBAAmB,EAAE,OAAO,CAAC,WAAW,MAAM,GAAG,EAAE,QAAQ,KAAK,WAAW,MAAM,GAAG,EAAE,QAAQ,KAAK,WAAW,MAAM,GAAG,EAAE,QAAQ,GAAG,CAAC;UACpJ;QACJ,SAAS,GAAG;QAAE;AACd,YAAI;AACA,gBAAM,KAAK,OAAO,MAAM,cAAc,EAAE;AACxC,cAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,KAAM,gBAAgB,MAAM;AACpD,kBAAM,MAAM,aAAa,EAAE;AAC3B,gBAAI,OAAO,gBAAgB,EAAE,OAAO,CAAC,aAAa,MAAM,GAAG,EAAE,QAAQ,KAAK,aAAa,MAAM,GAAG,EAAE,QAAQ,KAAK,aAAa,MAAM,GAAG,EAAE,QAAQ,GAAG,CAAC;AACnJ,gBAAI,OAAO,mBAAmB,EAAE,OAAO,CAAC,WAAW,MAAM,GAAG,EAAE,QAAQ,KAAK,WAAW,MAAM,GAAG,EAAE,QAAQ,KAAK,WAAW,MAAM,GAAG,EAAE,QAAQ,GAAG,CAAC;UACpJ;QACJ,SAAS,GAAG;QAAE;AACd,YAAI;AACA,gBAAM,KAAK,OAAO,MAAM,eAAe,EAAE;AACzC,cAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,KAAM,iBAAiB,MAAM;AACrD,kBAAM,MAAM,aAAa,EAAE;AAC3B,gBAAI,OAAO,gBAAgB,EAAE,OAAO,CAAC,cAAc,MAAM,GAAG,EAAE,QAAQ,KAAK,cAAc,MAAM,GAAG,EAAE,QAAQ,KAAK,cAAc,MAAM,GAAG,EAAE,QAAQ,GAAG,CAAC;AACtJ,gBAAI,OAAO,mBAAmB,EAAE,OAAO,CAAC,YAAY,MAAM,GAAG,EAAE,QAAQ,KAAK,YAAY,MAAM,GAAG,EAAE,QAAQ,KAAK,YAAY,MAAM,GAAG,EAAE,QAAQ,GAAG,CAAC;UACvJ;QACJ,SAAS,GAAG;QAAE;MAClB,SAAS,GAAG;MAAE;IAAC;AAGnB,aAAS,oBAAoB;AAAS,UAAI;AAClC,YAAI,YAAY,MAAM;AAClB,gBAAM,KAAK,SAAS,OAAO,qBAAqB,EAAE,OAAM;AACxD,cAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC5B,gBAAI,uBAAuB,MAAM;AAAE,kBAAI;AAAE,qCAAqB,CAAC,CAAC,GAAG,OAAO,gBAAgB,EAAE,OAAM;cAAI,SAAS,GAAG;cAAE;YAAE;AACtH,gBAAI;AAAE,iBAAG,OAAO,gBAAgB,EAAE,OAAO,uBAAuB,OAAO,qBAAqB,IAAI;YAAG,SAAS,GAAG;YAAE;UACrH;QACJ;MACJ,SAAS,GAAG;MAAE;IAAC;AAEnB,aAAS,OAAO;AACZ,UAAI;AACA,YAAI,KAAU;AACd,YAAI;AAAE,cAAI,YAAY;AAAM,iBAAK,SAAS,OAAO,qBAAqB,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AAChG,YAAI,gBAAgB;AAChB,cAAI;AACA,gBAAI,YAAY,MAAM;AAClB,kBAAI;AAAE,yBAAS,MAAM,mBAAmB,EAAE,QAAQ;cAAM,SAAS,GAAG;cAAE;AACtE,kBAAI;AAAE,yBAAS,MAAM,iBAAiB,EAAE,QAAQ;cAAM,SAAS,GAAG;cAAE;YACxE;UACJ,SAAS,GAAG;UAAE;AACd,cAAI;AACA,kBAAM,YAAY,aAAa,QAAQ;AACvC,gBAAI,UAAU,aAAa,kBAAkB,EAAE,OAAO,aAAa,EAAE,OAAM;AAC3E,gBAAI,WAAW,UAAU,OAAO,cAAc,EAAE,OAAM;AACtD,sBAAU,QAAQ,OAAO,eAAe,CAAC,EAAE,OAAO,SAAS,WAAW,OAAO,SAAS;AACtF,uBAAW,QAAQ,OAAO,eAAe,CAAC,EAAE,OAAO,UAAU,OAAO;AACpE,gBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC5B,kBAAI;AAAE,mBAAG,OAAO,oBAAoB,EAAE,OAAO,UAAU;cAAG,SAAS,GAAG;cAAE;AACxE,kBAAI;AAAE,mBAAG,OAAO,cAAc,EAAE,OAAO,QAAQ;cAAG,SAAS,GAAG;cAAE;YACpE;AACA,sBAAU,OAAO,cAAc,EAAE,OAAO,QAAQ;AAChD,gBAAI,cAAc,eAAe,MAAM;AAAE,kBAAI;AAAE,6BAAa,SAAS,MAAM,GAAG,EAAE;cAAO,SAAS,GAAG;cAAE;YAAE;UAC3G,SAAS,GAAG;UAAE;AACd,oBAAU;QACd,WAAW,SAAS;AAChB,oBAAU;AACV,cAAI;AACA,gBAAI,YAAY,MAAM;AAClB,kBAAI;AAAE,yBAAS,MAAM,mBAAmB,EAAE,QAAQ;cAAO,SAAS,GAAG;cAAE;AACvE,kBAAI;AAAE,yBAAS,MAAM,iBAAiB,EAAE,QAAQ;cAAO,SAAS,GAAG;cAAE;YACzE;UACJ,SAAS,GAAG;UAAE;QAClB;AACA,YAAI,cAAc,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC1C,cAAI,uBAAuB,MAAM;AAAE,gBAAI;AAAE,mCAAqB,CAAC,CAAC,GAAG,OAAO,gBAAgB,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UAAE;AACtH,cAAI;AAAE,eAAG,OAAO,gBAAgB,EAAE,OAAO,KAAK;UAAG,SAAS,GAAG;UAAE;AAC/D,cAAI;AAAE,eAAG,OAAO,oBAAoB,EAAE,OAAO,UAAU;UAAG,SAAS,GAAG;UAAE;QAC5E;MACJ,SAAS,GAAG;MAAE;IAAC;AAGnB,aAAS,mBAAmB;AACxB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,YAAY,OAAO,cAAc,EAAE,OAAM;AACnD,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,oBAAoB,OAAO,CAAC;AAAG;UAAQ;AACvF,gBAAM,MAAM,EAAE,MAAM,kBAAkB,EAAE;AACxC,YAAE,MAAM,kBAAkB,EAAE,QAAQ,CAAC;AACrC,YAAE,OAAO,oBAAoB,EAAE,OAAO,MAAM,QAAQ,CAAG;AACvD,2BAAiB,MAAM,qBAAqB,eAAe,OAAO,CAAC;QACvE,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,kBAAkB;AACvB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,YAAY,OAAO,cAAc,EAAE,OAAM;AACnD,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,oBAAoB,OAAO,CAAC;AAAG;UAAQ;AACvF,gBAAM,MAAM,EAAE,MAAM,mBAAmB,EAAE;AACzC,YAAE,MAAM,mBAAmB,EAAE,QAAQ,CAAC;AACtC,YAAE,MAAM,iBAAiB,EAAE,QAAQ,CAAC;AACpC,cAAI;AACA,kBAAM,KAAK,EAAE,MAAM,cAAc,EAAE;AACnC,gBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM;AAAI,iBAAG,OAAO,aAAa,EAAE,OAAO,GAAG;UACvE,SAAS,GAAG;UAAE;AACd,cAAI;AACA,kBAAM,KAAK,EAAE,MAAM,cAAc,EAAE;AACnC,gBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM;AAAI,iBAAG,OAAO,aAAa,EAAE,OAAO,GAAG;UACvE,SAAS,GAAG;UAAE;AACd,2BAAiB,MAAM,eAAe,aAAa,OAAO,CAAC;QAC/D,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,iBAAiB,MAAc;AACpC,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,YAAY,OAAO,cAAc,EAAE,OAAM;AACnD,cAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B,YAAE,OAAO,eAAe,EAAE,OAAO,MAAM,IAAI;AAC3C,2BAAiB,WAAW,KAAK,QAAQ,CAAC,GAAG,OAAO,CAAC;QACzD,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAKP,aAAS,mBAAmB;AACxB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,WAAU;AACpB,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,qBAAqB,OAAO,CAAC;AAAG;UAAQ;AACxF,YAAE,OAAO,qBAAqB,EAAE,OAAM;AACtC,0BAAe;QACnB,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,kBAAkB,OAAe;AACtC,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,WAAU;AACpB,cAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B,cAAI,MAAM;AACV,cAAI;AAAE,kBAAM,EAAE,MAAM,sBAAsB,EAAE;UAAO,SAAS,GAAG;UAAE;AACjE,cAAI,MAAM;AACV,cAAI;AACA,kBAAM,QAAQ,EAAE,MAAM,qBAAqB,EAAE;AAC7C,gBAAI,SAAS,QAAQ,CAAC,MAAM,OAAM;AAAI,oBAAM,MAAM;UACtD,SAAS,GAAG;UAAE;AACd,cAAI,MAAM;AAAG,mBAAO,MAAM,QAAQ,OAAO;AACzC,YAAE,MAAM,sBAAsB,EAAE,QAAQ;AACxC,cAAI;AACA,kBAAM,QAAQ,EAAE,MAAM,qBAAqB,EAAE;AAC7C,gBAAI,SAAS,QAAQ,CAAC,MAAM,OAAM,KAAM,OAAO,KAAK,MAAM,MAAM,QAAQ;AACpE,oBAAM,KAAK,MAAM,IAAI,GAAG;AACxB,kBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM;AAAI,iCAAiB,eAAe,GAAG,SAAQ,GAAI,OAAO,CAAC;YAC3F;UACJ,SAAS,GAAG;UAAE;QAClB,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,qBAAqB;AAC1B,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,WAAU;AACpB,cAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B,cAAI,MAAM;AACV,cAAI;AAAE,kBAAM,EAAE,MAAM,sBAAsB,EAAE;UAAO,SAAS,GAAG;UAAE;AACjE,cAAI,OAAO;AACX,cAAI;AACA,kBAAM,QAAQ,EAAE,MAAM,qBAAqB,EAAE;AAC7C,gBAAI,SAAS,QAAQ,CAAC,MAAM,OAAM,KAAM,OAAO,KAAK,MAAM,MAAM,QAAQ;AACpE,oBAAM,KAAK,MAAM,IAAI,GAAG;AACxB,kBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM;AAAI,uBAAO,GAAG,SAAQ;YACtD;UACJ,SAAS,GAAG;UAAE;AACd,2BAAiB,eAAe,MAAM,OAAO,CAAC;QAClD,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,gBAAgB;AACrB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,WAAU;AACpB,cAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B,YAAE,OAAO,iBAAiB,EAAE,OAAM;AAClC,2BAAiB,kBAAkB,OAAO,CAAC;QAC/C,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGX,UAAM,eAA6D,CAAA;AACnE,aAAS,aAAa,KAAU,KAAgB;AAC5C,UAAI;AACA,YAAI,OAAO,QAAQ,IAAI,OAAM;AAAI;AACjC,YAAI,KAAU;AACd,YAAI;AAAE,eAAK,IAAI,OAAO,0BAA0B,CAAC,EAAE,QAAQ,SAAS,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AAC9F,YAAI,MAAM,QAAQ,GAAG,OAAM,GAAI;AAAE,cAAI;AAAE,iBAAK,IAAI,OAAO,gBAAgB,CAAC,EAAE,QAAQ,SAAS,EAAE,OAAM;UAAI,SAAS,GAAG;UAAE;QAAE;AACvH,YAAI,MAAM,QAAQ,GAAG,OAAM,GAAI;AAAE,cAAI;AAAE,iBAAK,aAAa,KAAK,SAAS;UAAG,SAAS,GAAG;UAAE;QAAE;AAC1F,YAAI,MAAM,QAAQ,GAAG,OAAM;AAAI;AAC/B,YAAI;AAAE,aAAG,OAAO,iBAAiB,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AAChE,YAAI;AAAE,aAAG,OAAO,gBAAgB,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AAC/D,YAAI;AAAE,aAAG,OAAO,4BAA4B,EAAE,OAAO,CAAC;QAAG,SAAS,GAAG;QAAE;AACvE,YAAI;AAAE,aAAG,OAAO,oBAAoB,EAAE,OAAO,QAAQ,OAAO,eAAe,CAAC,EAAE,OAAO,KAAK,UAAU,CAAC;QAAG,SAAS,GAAG;QAAE;AACtH,qBAAa,KAAK,EAAE,KAAU,KAAU,OAAQ,KAAK,IAAG,IAAK,KAAK,CAAE;MACxE,SAAS,GAAG;MAAE;IAAC;AAGnB,aAAS,UAAU,UAAU;AACzB,UAAI,CAAC;AAAW;AAChB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,MAAW;AACf,cAAI,MAAW;AAEf,cAAI;AAAE,kBAAM,kBAAkB,OAAO,cAAc,EAAE,OAAM;UAAI,SAAS,GAAG;UAAE;AAC7E,cAAI;AAAE,kBAAM,kBAAkB,OAAO,cAAc,EAAE,OAAM;UAAI,SAAS,GAAG;AAAE,kBAAM;UAAoB;AAEvG,cAAI,MAAW;AACf,cAAI;AACA,kBAAM,cAAc,OAAO,eAAe,CAAC,EAAE,OACzC,OAAO,OAAO,QAAQ,GACtB,KACA,KACA,GAAG,IAAI;UAEf,SAAS,GAAG;UAAE;AACd,cAAI,OAAO,QAAQ,IAAI,OAAM,GAAI;AAC7B,gBAAI;AACA,oBAAM,SAAS,UAAU,OAAO,QAAQ,CAAC,EAAE,OAAO,OAAO,OAAO,QAAQ,GAAG,WAAW,KAAK,MAAM;AACjG,kBAAI,UAAU,QAAQ,CAAC,OAAO,OAAM,GAAI;AACpC,sBAAM,OAAO,OAAO,eAAe,CAAC,EAAE,OAAO,QAAQ,KAAK,GAAG;cACjE;YACJ,SAAS,GAAG;YAAE;UAClB;AAEA,cAAI,OAAO,QAAQ,CAAC,IAAI,OAAM,KAAM,cAAc;AAC9C,gBAAI,MAAW;AACf,gBAAI;AAAE,oBAAM,kBAAkB,OAAO,aAAa,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;AAC5E,gBAAI,OAAO;AAAM,2BAAa,KAAK,GAAG;UAC1C;AAEA,0BAAe;QACnB,SAAS,GAAG;QAAC;MAAC,CACjB;IAAE;AAEH,aAAS,kBAAwB;AAC7B,YAAM,MAAM,KAAK,IAAG;AACpB,eAAS,IAAI,aAAa,SAAS,GAAG,KAAK,GAAG,KAAK;AAC/C,YAAI;AACA,gBAAM,IAAI,aAAa,CAAC;AACxB,cAAI,EAAE,OAAO,QAAQ,EAAE,IAAI,OAAM,KAAM,EAAE,QAAQ,KAAK;AAAE,yBAAa,OAAO,GAAG,CAAC;AAAG;UAAU;AAC7F,cAAI,KAAU;AACd,cAAI;AAAE,iBAAK,EAAE,IAAI,OAAO,0BAA0B,CAAC,EAAE,QAAQ,SAAS,EAAE,OAAM;UAAI,SAAS,GAAG;UAAE;AAChG,cAAI;AACA,gBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM,GAAI;AAC5B,iBAAG,OAAO,oBAAoB,EAAE,OAAO,QAAQ,OAAO,eAAe,CAAC,EAAE,OAAO,EAAE,KAAK,UAAU,CAAC;YACrG;UACJ,SAAS,GAAG;UAAE;QAClB,SAAS,GAAG;AAAE,uBAAa,OAAO,GAAG,CAAC;QAAG;MAC7C;IAAC;AAGL,aAAS,SAAS,IAAa;AAC3B,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,gBAAM,IAAI,YAAY,OAAO,cAAc,EAAE,OAAM;AACnD,cAAI,KAAK,QAAQ,EAAE,OAAM,GAAI;AAAE,6BAAiB,oBAAoB,OAAO,CAAC;AAAG;UAAQ;AACvF,cAAI,2BAA2B,MAAM;AACjC,gBAAI;AAAE,uCAAyB,EAAE,MAAM,cAAc,EAAE;YAAO,SAAS,GAAG;YAAE;UAChF;AACA,gBAAM,MAAM,KAAK,MAAO,2BAA2B,OAAO,yBAAyB;AACnF,cAAI;AAAE,cAAE,MAAM,cAAc,EAAE,QAAQ;UAAK,SAAS,GAAG;UAAE;AACzD,cAAI;AACA,kBAAM,IAAI,QAAO;AACjB,gBAAI,KAAK,QAAQ,CAAC,EAAE,OAAM,GAAI;AAAE,gBAAE,MAAM,iBAAiB,EAAE,QAAQ;YAAI;UAC3E,SAAS,GAAG;UAAE;AACd,2BAAiB,KAAK,kCAAkC,iBAAiB,OAAO,CAAC;QACrF,SAAS,GAAG;QAAE;MAAC,CAClB;IAAE;AAGP,aAAS,cAAc,OAAe;AAClC,iBAAW,KAAK,IAAI,GAAG,WAAW,KAAK;AACvC,uBAAiB,gBAAgB,UAAU,OAAO,CAAC;IAAE;AAGzD,YAAQ,EAAE,IAAI;MACV,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AAAE,4BAAkB;AAAG,wBAAc;QAAE;QACrD,aAAa;OAChB;MAAE;MACH,IAAI,WAAW;QACf,YAAY;QACZ,QAAQ,MAAM;AAAE,mBAAS;QAAK;QAC9B,cAAc,MAAM;AAAE,mBAAS;QAAK;QACpC,eAAe,MAAM;AAAE,mBAAS;QAAM;QACtC,aAAa;OACZ;MACT,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AACV,cAAI,YAAY,gBAAgB,MAAM;AAClC,2BAAe,aACX,QAAQ,OAAO,eAAe,CAAC,EAAE,OAAO,kBAAkB,OAAO,cAAc,EAAE,OAAM,GAAI,CAAC,GAAK,QAAQ,CAAG,CAAC,GAC7G,kBAAkB,OAAO,cAAc,EAAE,OAAM,GAC/C,CAAC,OAAO,MAAM,IAAI,GAAG,GAAG,SAAS,MAAM,IAAI;AAC/C,gBAAI;AACA,oBAAM,OAAO,aAAa,cAAc,QAAQ;AAChD,kBAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM;AAAI,qBAAK,OAAO,eAAe,EAAE,OAAO,KAAK;YACjF,SAAS,GAAG;YAAE;UAClB,WAAW,CAAC,YAAY,gBAAgB,MAAM;AAC1C,oBAAQ,YAAY;AACpB,2BAAe;UACnB;QAAC;QAGL,aAAa;QACb,SAAS;OACZ;MACO,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AACV,cAAI;AACA,gBAAI,gBAAgB,CAAC,mBAAmB;AACpC,8BAAgB,KAAK;YACzB;AACA,gBAAI,CAAC,gBAAgB,mBAAmB;AACpC,8BAAgB,IAAI;YACxB;AACA,gCAAoB;UACxB,SAAS,GAAG;UAAE;QAAC;QAEnB,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AAAE,oBAAU;QAAK;QAC/B,cAAc,MAAM;AAAE,oBAAU;QAAK;QACrC,eAAe,MAAM;AAAE,oBAAU;QAAM;QACvC,aAAa;OAChB;;AAEL,YAAQ,EAAE,IAAI;MACV,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AAAE,4BAAkB;AAAG,wBAAc;QAAE;QACrD,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AACV,iBAAO,QAAQ,MAAM;AACjB,gBAAI;AAAE,sBAAQ,gDAAgD;YAAG,SAAS,GAAG;YAAE;UAAC,CACnF;QAAE;QAEP,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AACV,iBAAO,QAAQ,MAAM;AACjB,gBAAI;AAAE,sBAAQ,kBAAkB;YAAG,SAAS,GAAG;YAAE;UAAC,CACrD;QAAE;QAEP,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AACV,iBAAO,QAAQ,MAAM;AACjB,gBAAI;AAAE,sBAAQ,sCAAsC;YAAG,SAAS,GAAG;YAAE;UAAC,CACzE;QAAE;QAEP,aAAa;OAChB;;AAEL,YAAQ,EAAE,IAAI;MACV,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AAAE,4BAAkB;AAAG,wBAAc;QAAE;QACrD,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM,UAAU,6BAA6B;QACrD,aAAa;OAChB;MACA,IAAI,WAAW;QACZ,YAAY;QACZ,QAAQ,MAAM,UAAU,+BAA+B;QACvD,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM,UAAU,6BAA6B;QACrD,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM,UAAU,gCAAgC;QACxD,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM,UAAU,4BAA4B;QACpD,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM,UAAU,yBAAyB;QACjD,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM,UAAU,iCAAiC;QACzD,aAAa;OAChB;;AAEL,YAAQ,EAAE,IAAI;MACV,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AAAE,4BAAkB;AAAG,wBAAc;QAAE;QACrD,aAAa;OAChB;;AAEL,YAAQ,EAAE,IAAI;MACV,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AAAE,4BAAkB;AAAG,wBAAc;QAAE;QACrD,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,cAAc,MAAM;AAAE,4BAAkB;AAAM,yBAAe;QAAE;QAC/D,eAAe,MAAM;AAAE,4BAAkB;QAAM;QAC/C,aAAa;OAChB;MACF,IAAI,WAAW;QACb,YAAY;QACZ,QAAQ,MAAM;AACX,gBAAM,QAAQ,eAAc;AAC5B,+BAAqB,OAAO,WAAW,EAAE,OAAO;YAC5C,MAAM,IAAI;YACV,MAAM,IAAI;YACV,MAAM,IAAI;YACV,MAAM,IAAI;WACb;QAAE;OAEP;MAEA,IAAI,WAAW;QACX,YAAY;QACZ,cAAc,MAAM;AAAE,0BAAiB;AAAM,2BAAkB;QAAE;QACjE,eAAe,MAAM;AAAE,0BAAiB;QAAM;QAC9C,aAAa;OACnB;;AAEF,YAAQ,EAAE,IAAI;MACV,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AAAE,4BAAkB;AAAG,wBAAc;QAAE;QACrD,aAAa;OAChB;MACT,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AACV,mBAAS,IAAI,GAAG,IAAI,IAAI,KAAK;AACzB,kBAAM,cAAc,cAAc,OAAO,eAAe,CAAC,EAAE,OAAO,OAAO,OAAO,4BAA4B,GAAG,CAAC,KAAO,MAAQ,CAAG,GAAG,oBAAoB,GAAG,IAAI;AAChK,oBAAQ,WAAW;AACnB,4BAAe;UACnB;QAAC;QAEL,aAAa;OAChB;MACD,IAAI,WAAW;QACX,YAAY;QACZ,QAAQ,MAAM;AACV,mBAAS,IAAI,GAAG,IAAI,MAAM,KAAK;AAC3B,kBAAM,cAAc,cAAc,OAAO,eAAe,CAAC,EAAE,OAAO,OAAO,OAAO,4BAA4B,GAAG,CAAC,KAAO,MAAQ,CAAG,GAAG,oBAAoB,GAAG,IAAI;AAChK,oBAAQ,WAAW;AACnB,4BAAe;UACnB;QAAC;QAEL,aAAa;OAChB;;AAEG,YAAQ,CAAC,EAAE,KAAK,IAAI,WAAW,EAAE,YAAY,WAAW,QAAQ,MAAM;AAAE,wBAAkB;AAAI,oBAAc;IAAE,GAAI,aAAa,MAAK,CAAE,CAAC;AACvI,YAAQ,CAAC,EAAE,KAAK,IAAI,WAAW,EAAE,YAAY,YAAY,QAAQ,MAAM;AAAE,wBAAkB;AAAI,oBAAc;IAAE,GAAI,aAAa,MAAK,CAAE,CAAC;AACxI,YAAQ,CAAC,EAAE,KAAK,IAAI,WAAW,EAAE,YAAY,aAAa,QAAQ,MAAM;AAAE,wBAAkB;AAAI,oBAAc;IAAE,GAAI,aAAa,MAAK,CAAE,CAAC;AACzI,YAAQ,CAAC,EAAE,KAAK,IAAI,WAAW,EAAE,YAAY,WAAW,QAAQ,MAAM;AAAE,wBAAkB;AAAI,oBAAc;IAAE,GAAI,aAAa,MAAK,CAAE,CAAC;AACvI,YAAQ,CAAC,EAAE,KAAK,IAAI,WAAW,EAAE,YAAY,UAAU,QAAQ,MAAM;AAAE,wBAAkB;AAAI,oBAAc;IAAE,GAAI,aAAa,MAAK,CAAE,CAAC;AACtI,qBAAgB;AAEhB,eAAW,MAAM;AACb,UAAI;AACA,cAAM,IAAI,QAAO;AACjB,YAAI,KAAK,QAAQ,CAAC,EAAE,OAAM,GAAI;AAC1B,gBAAM,UAAU,CAAC,MAAc,cAAsB;AACjD,gBAAI;AACA,oBAAM,IAAI,SAAS,IAAI;AACvB,kBAAI,KAAK;AAAM,kBAAE,UAAU,CAAC,CAAC,EAAE,MAAM,SAAS,EAAE;YACpD,SAAS,GAAG;YAAE;UAAC;AAEnB,kBAAQ,WAAW,YAAY;AAC/B,kBAAQ,eAAe,mBAAmB;AAC1C,kBAAQ,eAAe,wBAAwB;AAC/C,kBAAQ,aAAa,iBAAiB;AACtC,kBAAQ,eAAe,mBAAmB;AAC1C,kBAAQ,aAAa,kBAAkB;AACvC,kBAAQ,eAAe,mBAAmB;AAC1C,kBAAQ,gBAAgB,oBAAoB;AAC5C,kBAAQ,YAAY,gBAAgB;AACpC,kBAAQ,OAAO,YAAY;QAC/B;MACJ,SAAS,GAAG;MAAE;IAAC,GAChB,GAAI;AAGP,QAAI,kBAAkB,MAAM;AACxB,UAAI;AACA,uBAAe,OAAO,YAAY,EAAE,iBAAiB,SAAU,QAAa;AACxE,cAAI;AAAgB;AACpB,iBAAO,KAAK,OAAO,YAAY,EAAE,OAAO,MAAM;QAAE;MAExD,SAAS,GAAG;MAAE;AACd,UAAI;AACA,uBAAe,OAAO,cAAc,EAAE,iBAAiB,SAAU,QAAa;AAC1E,cAAI;AAAgB;AACpB,iBAAO,KAAK,OAAO,cAAc,EAAE,OAAO,MAAM;QAAE;MAE1D,SAAS,GAAG;MAAE;AACd,UAAI;AACA,uBAAe,OAAO,kBAAkB,EAAE,iBAAiB,SAAU,QAAa;AAC9E,cAAI;AAAgB;AACpB,iBAAO,KAAK,OAAO,kBAAkB,EAAE,OAAO,MAAM;QAAE;MAE9D,SAAS,GAAG;MAAE;IAClB;AAKA,QAAI,wBAAwB,MAAM;AAC9B,UAAI;AACA,6BAAqB,OAAO,gBAAgB,EAAE,iBAAiB,SAAU,OAAY;AACjF,cAAI;AACA,gBAAI,IAAI;AACR,gBAAI;AAAE,kBAAI,OAAO,KAAK;YAAG,SAAS,GAAG;YAAE;AACvC,gBAAI;AAAE,kBAAI,SAAS,QAAQ,OAAO,UAAU,YAAY,MAAM,UAAU;AAAW,oBAAI,OAAO,MAAM,KAAK;YAAG,SAAS,GAAG;YAAE;AAC1H,gBAAI;AAAE,kBAAI,OAAO,UAAU;AAAU,oBAAI,OAAO,KAAK;YAAG,SAAS,GAAG;YAAE;AACtE,oBAAQ,IAAI,8BAA8B,IAAI,UAAS,oBAAI,KAAI,GAAG,mBAAkB,CAAE;UAC1F,SAAS,GAAG;UAAE;AACd,iBAAO,KAAK,OAAO,gBAAgB,EAAE,OAAO,KAAK;QAAE;MAE3D,SAAS,GAAG;MAAE;IAClB;AACA,QAAI;AACA,YAAM,oBAAoB,QAAQ,gBAAgB,oCAAoC;AACtF,UAAI,qBAAqB,MAAM;AAC3B,0BAAkB,OAAO,MAAM,EAAE,iBAAiB,SAAU,aAAkB,QAAa;AACvF,cAAI;AACA,gBAAI,IAAI;AACR,gBAAI;AAAE,kBAAI,OAAO,MAAM;YAAG,SAAS,GAAG;YAAE;AACxC,oBAAQ,IAAI,mCAAmC,OAAO,WAAW,IAAI,aAAa,IAAI,UAAS,oBAAI,KAAI,GAAG,mBAAkB,CAAE;UAClI,SAAS,GAAG;UAAE;AACd,iBAAO,KAAK,OAAO,MAAM,EAAE,OAAO,aAAa,MAAM;QAAE;MAE/D;IACJ,SAAS,GAAG;IAAE;AAId,QAAI,wBAAwB,MAAM;AAC9B,UAAI;AACA,6BAAqB,OAAO,kBAAkB,EAAE,iBAAiB,WAAY;AACzE,cAAI;AAAE,iBAAK,OAAO,kBAAkB,EAAE,OAAM;UAAI,SAAS,GAAG;UAAE;AAC9D,cAAI;AACA,kBAAM,MAAM,KAAK,MAAM,YAAY,EAAE;AACrC,gBAAI,OAAO,QAAQ,IAAI,OAAM;AAAI;AACjC,kBAAM,QAAQ,KAAK,MAAM,gBAAgB,EAAE;AAC3C,gBAAI,SAAS,QAAQ,MAAM,OAAM;AAAI;AACrC,kBAAM,WAAW,IAAI,OAAO,WAAW,EAAE,OAAM;AAC/C,kBAAM,aAAa,MAAM,OAAO,WAAW,EAAE,OAAM;AACnD,qBAAS,IAAI,GAAG,IAAI,UAAU,KAAK;AAC/B,kBAAI;AACA,sBAAM,IAAI,IAAI,OAAO,UAAU,EAAE,OAAO,CAAC;AACzC,oBAAI,KAAK,QAAQ,EAAE,OAAM;AAAI;AAC7B,oBAAI,MAAM;AACV,yBAAS,IAAI,GAAG,IAAI,YAAY,KAAK;AACjC,sBAAI;AAAE,wBAAI,MAAM,OAAO,UAAU,EAAE,OAAO,CAAC,EAAE,OAAO,OAAO,EAAE,MAAM,GAAG;AAAE,4BAAM;AAAM;oBAAO;kBAAE,SAAS,IAAI;kBAAE;gBAChH;AACA,oBAAI,CAAC,KAAK;AAAE,sBAAI;AAAE,0BAAM,OAAO,KAAK,EAAE,OAAO,CAAC;kBAAG,SAAS,IAAI;kBAAE;gBAAE;cACtE,SAAS,IAAI;cAAE;YACnB;UACJ,SAAS,GAAG;UAAE;QAAC;MAEvB,SAAS,GAAG;MAAE;IAClB;AAEA,QAAI,iBAAiB;AACrB,QAAI,eAAe;AACnB,QAAI,qBAA0B;AAC9B,QAAI,qBAA0B;AAC9B,QAAI,qBAA0B;AAC9B,UAAM,kBAAoC,oBAAI,IAAG;AACjD,QAAI,kBAAiC;AACrC,QAAI,gBAA0B,CAAA;AAC9B,QAAI,iBAAiB;AACrB,QAAI,oBAAoB;AACxB,QAAI,sBAAsB;AAC1B,QAAI,qBAAqB;AAEzB,aAAS,4BAA4B,MAAsB;AACvD,YAAM,QAAQ,KAAK,QAAQ,OAAO,GAAG,EAAE,MAAM,GAAG;AAChD,YAAM,OAAO,MAAM,MAAM,SAAS,CAAC;AACnC,YAAM,SAAS,KAAK,YAAY,GAAG;AACnC,aAAO,WAAW,KAAK,OAAO,KAAK,UAAU,GAAG,MAAM;IAAE;AAG5D,aAAS,iBAAiB,MAAsB;AAC5C,YAAM,YAAY,KAAK,MAAM,GAAG,EAAE,CAAC,EAAE,MAAM,GAAG,EAAE,CAAC;AACjD,YAAM,SAAS,UAAU,YAAY,GAAG;AACxC,aAAO,WAAW,KAAK,KAAK,UAAU,UAAU,SAAS,CAAC,EAAE,YAAW;IAAG;AAElF,aAAS,UAAU;AACjB,UAAI,CAAC;AAAW;AAEhB,YAAM,UAAU,UAAU,EAAE;AAC5B,YAAM,aAAa,QAAQ;AAE3B,UAAI,cAAc;AAChB,cAAM,YAAY,aAAa,UAAU,EAAE,OAAO,cAAc,EAAE,OAAM;AAExE,cAAM,iBAAiB,OAAO,OAAO,mBAAmB,EACrD,QAAQ,OAAO,OAAO,SAAS,uBAAuB,EAAE,MAAM,MAAM,uBAAuB,CAAC,EAC5F,OAAM;AAET,iBAAS,IAAI,GAAG,IAAI,eAAe,QAAQ,KAAK;AAC9C,gBAAM,KAAK,eAAe,IAAI,CAAC;AAC/B,gBAAM,KAAK,GAAG,OAAO,gBAAgB,EAAE,OAAM;AAE7C,cAAI,CAAC;AAAI;AAET,gBAAM,OAAO,GAAG,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,EAAG,YAAW;AAClE,cAAI,CAAC,KAAK,SAAS,SAAS;AAAG;AAE/B,gBAAM,YAAY,aAAa,EAAE;AACjC,oBAAU,OAAO,cAAc,EAAE,OAAO,SAAS;AAEjD,cAAI;AACF,kBAAM,KAAK,GAAG,OAAO,cAAc,EAChC,QAAQ,OAAO,OAAO,SAAS,2BAA2B,EAAE,MAAM,MAAM,uBAAuB,CAAC,EAChG,OAAM;AAET,gBAAI,MAAM,CAAC,GAAG,OAAM,GAAI;AACtB,iBAAG,OAAO,iBAAiB,EAAE,OAAO,IAAI;AACxC,iBAAG,OAAO,cAAc,EAAE,OAAO,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,qBAAqB,EAAE,MAAM,MAAM,EAAE,KAAK;AACxI,iBAAG,OAAO,qBAAqB,EAAE,OAAO,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,qBAAqB,EAAE,MAAM,MAAM,EAAE,KAAK;YACjJ;UACF,SAAS,GAAG;UAAC;AAEb,cAAI;AACF,kBAAM,MAAM,GAAG,OAAO,YAAY,EAAE,OAAM;AAC1C,gBAAI,KAAK;AACP,iBAAG,OAAO,KAAK,EAAE,OACf,OAAO,OAAO,cAAc,GAC5B,OAAO,OAAO,SAAS,uBAAuB,EAAE,MAAM,MAAM,sBAAsB,EAAE,MAAM,KAAK,EAAE,OACjG,SAAS;YAEb;UACF,SAAS,GAAG;UAAC;AAEb,0BAAe;AACf;QACF;MACF;IAAC;AAEC,aAAS,cAAmB;AACxB,UAAI;AACA,YAAI,wBAAwB,MAAM;AAC9B,gBAAM,QAAQ,kBAAkB,oBAAoB;AACpD,kBAAQ,IAAI,sCAAuC,SAAS,CAAC,MAAM,OAAM,IAAM,MAAM,SAAS,aAAa;AAC3G,cAAI,SAAS,CAAC,MAAM,OAAM,GAAI;AAC1B,qBAAS,IAAI,GAAG,IAAI,MAAM,QAAQ,KAAK;AACnC,kBAAI;AACA,sBAAM,OAAO,MAAM,IAAI,CAAC;AACxB,oBAAI,CAAC,QAAQ,KAAK,OAAM,GAAI;AAAE,0BAAQ,IAAI,oBAAoB,IAAI,UAAU;AAAG;gBAAU;AACzF,sBAAM,KAAK,KAAK,MAAM,YAAY,EAAE;AACpC,oBAAI,CAAC,MAAM,GAAG,OAAM,GAAI;AAAE,0BAAQ,IAAI,oBAAoB,IAAI,kBAAkB;AAAG;gBAAU;AAC7F,sBAAM,SAAS,GAAG,OAAO,YAAY,EAAE,OAAM;AAC7C,wBAAQ,IAAI,oBAAoB,IAAI,aAAa,MAAM;AACvD,oBAAI,CAAC;AAAQ;AACb,sBAAM,MAAM,KAAK,OAAO,mBAAmB,EAAE,OAAM;AACnD,wBAAQ,IAAI,oBAAoB,IAAI,qBAAqB,MAAM,UAAU,WAAW,OAAO,CAAC,IAAI,OAAM,IAAK,OAAO,IAAI,MAAM,OAAO,MAAM,GAAG;AAC5I,oBAAI,OAAO,CAAC,IAAI,OAAM;AAAI,yBAAO;cACrC,SAAS,GAAG;AAAE,wBAAQ,IAAI,oBAAoB,IAAI,aAAa,CAAC;cAAG;YACvE;UACJ;QACJ,OAAO;AACH,kBAAQ,IAAI,sCAAsC;QACtD;MACJ,SAAS,GAAG;AAAE,gBAAQ,IAAI,2CAA2C,CAAC;MAAG;AACzE,UAAI;AACA,YAAI,uBAAuB,MAAM;AAC7B,gBAAM,WAAW,oBAAoB,OAAO,cAAc,EAAE,OAAM;AAClE,kBAAQ,IAAI,sCAAsC,YAAY,CAAC,SAAS,OAAM,IAAK,UAAU,OAAO;AACpG,cAAI,YAAY,CAAC,SAAS,OAAM,GAAI;AAChC,gBAAI;AACA,oBAAM,UAAU,SAAS,OAAO,qBAAqB,EAAE,OAAM;AAC7D,sBAAQ,IAAI,oCAAoC,WAAW,CAAC,QAAQ,OAAM,IAAK,UAAU,OAAO;AAChG,kBAAI,WAAW,CAAC,QAAQ,OAAM,GAAI;AAC9B,uBAAO;cACX;YACJ,SAAS,GAAG;AAAE,sBAAQ,IAAI,0CAA0C,CAAC;YAAG;AACxE,gBAAI;AACA,oBAAM,UAAU,SAAS,MAAM,iBAAiB,EAAE;AAClD,sBAAQ,IAAI,sCAAsC,WAAW,CAAC,QAAQ,OAAM,IAAK,UAAU,OAAO;AAClG,kBAAI,WAAW,CAAC,QAAQ,OAAM,GAAI;AAC9B,uBAAO;cACX;YACJ,SAAS,GAAG;AAAE,sBAAQ,IAAI,4CAA4C,CAAC;YAAG;UAC9E;QACJ,OAAO;AACH,kBAAQ,IAAI,qCAAqC;QACrD;MACJ,SAAS,GAAG;AAAE,gBAAQ,IAAI,wCAAwC,CAAC;MAAG;AACtE,UAAI;AACA,YAAI,wBAAwB,MAAM;AAC9B,gBAAM,QAAQ,kBAAkB,oBAAoB;AACpD,kBAAQ,IAAI,sCAAuC,SAAS,CAAC,MAAM,OAAM,IAAM,MAAM,SAAS,aAAa;AAC3G,cAAI,SAAS,CAAC,MAAM,OAAM,GAAI;AAC1B,qBAAS,IAAI,GAAG,IAAI,MAAM,QAAQ,KAAK;AACnC,kBAAI;AACA,sBAAM,OAAO,MAAM,IAAI,CAAC;AACxB,oBAAI,CAAC,QAAQ,KAAK,OAAM;AAAI;AAC5B,sBAAM,UAAU,KAAK,OAAO,qBAAqB,EAAE,OAAM;AACzD,wBAAQ,IAAI,oBAAoB,IAAI,uBAAuB,WAAW,CAAC,QAAQ,OAAM,IAAK,UAAU,OAAO;AAC3G,oBAAI,WAAW,CAAC,QAAQ,OAAM,GAAI;AAC9B,yBAAO;gBACX;cACJ,SAAS,GAAG;AAAE,wBAAQ,IAAI,oBAAoB,IAAI,aAAa,CAAC;cAAG;YACvE;UACJ;QACJ,OAAO;AACH,kBAAQ,IAAI,sCAAsC;QACtD;MACJ,SAAS,GAAG;AAAE,gBAAQ,IAAI,yCAAyC,CAAC;MAAG;AACvE,UAAI;AACA,YAAI,iBAAiB,MAAM;AAAE,kBAAQ,IAAI,+BAA+B;AAAG,iBAAO;QAAM;AACxF,cAAM,iBAAiB,iBAAiB,aAAa;AACrD,gBAAQ,IAAI,mCAAmC,kBAAkB,CAAC,eAAe,OAAM,IAAK,UAAU,OAAO;AAC7G,YAAI,kBAAkB,CAAC,eAAe,OAAM;AAAI,iBAAO;MAC3D,SAAS,GAAG;AAAE,gBAAQ,IAAI,oCAAoC,CAAC;MAAG;AAClE,aAAO;IAAK;AAGhB,aAAS,gBAAgB,GAAmB;AACxC,YAAM,QAAiC;QACnC,GAAG;QAAe,GAAG;QAAkB,GAAG;QAAiB,GAAG;QAAgB,GAAG;QACjF,GAAG;QAAiC,GAAG;QAA0B,GAAG;QACpE,GAAG;QAAW,GAAG;QAAU,IAAI;QAAW,IAAI;QAC9C,IAAI;QAA4B,IAAI;QAAiB,IAAI;QAAgB,IAAI;QAC7E,IAAI;QAA0B,IAAI;QAAyB,IAAI;QAA+B,IAAI;;AAEtG,YAAM,IAAI,MAAM,CAAC;AACjB,aAAO,MAAM,SAAY,IAAI,OAAO,IAAI,MAAM,cAAc,IAAI;IAAI;AAGxE,aAAS,kBAAkB,UAAe,KAAmB;AACzD,UAAI;AACA,YAAI,CAAC,YAAY,SAAS,OAAM,GAAI;AAAE,kBAAQ,IAAI,aAAa,MAAM,iBAAiB;AAAG;QAAQ;AACjG,gBAAQ,IAAI,aAAa,MAAM,aAAa,SAAS,MAAM,IAAI;AAC/D,gBAAQ,IAAI,aAAa,MAAM,sBAAsB,MAAM;AAAE,cAAI;AAAE,mBAAO,CAAC,CAAC,SAAS,OAAO,mBAAmB,EAAE,OAAM;UAAI,SAAS,GAAG;AAAE,mBAAO,SAAS;UAAG;QAAC,GAAG,CAAE;AAClK,gBAAQ,IAAI,aAAa,MAAM,wBAAwB,MAAM;AAAE,cAAI;AAAE,mBAAO,CAAC,CAAC,SAAS,OAAO,qBAAqB,EAAE,OAAM;UAAI,SAAS,GAAG;AAAE,mBAAO,SAAS;UAAG;QAAC,GAAG,CAAE;AACtK,gBAAQ,IAAI,aAAa,MAAM,yBAAyB,MAAM;AAAE,cAAI;AAAE,mBAAO,CAAC,CAAC,SAAS,OAAO,sBAAsB,EAAE,OAAM;UAAI,SAAS,GAAG;AAAE,mBAAO,SAAS;UAAG;QAAC,GAAG,CAAE;AACxK,gBAAQ,IAAI,aAAa,MAAM,uBAAuB,MAAM;AAAE,cAAI;AAAE,mBAAO,CAAC,CAAC,SAAS,OAAO,oBAAoB,EAAE,OAAM;UAAI,SAAS,GAAG;AAAE,mBAAO,SAAS;UAAG;QAAC,GAAG,CAAE;AACpK,gBAAQ,IAAI,aAAa,MAAM,mBAAmB,MAAM;AAAE,cAAI;AAAE,mBAAO,SAAS,OAAO,gBAAgB,EAAE,OAAM;UAAI,SAAS,GAAG;AAAE,mBAAO,SAAS;UAAG;QAAC,GAAG,CAAE;AAC1J,gBAAQ,IAAI,aAAa,MAAM,gCAAgC,MAAM;AAAE,cAAI;AAAE,mBAAO,CAAC,CAAC,SAAS,OAAO,6BAA6B,EAAE,OAAM;UAAI,SAAS,GAAG;AAAE,mBAAO,SAAS;UAAG;QAAC,GAAG,CAAE;AACtL,YAAI;AACA,gBAAM,KAAK,SAAS,MAAM,OAAO,EAAE;AACnC,kBAAQ,IAAI,aAAa,MAAM,cAAc,MAAM,CAAC,GAAG,OAAM,IAAK,aAAa,GAAG,MAAM,OAAO,gBAAgB,GAAG,OAAO,SAAS,EAAE,IAAI,OAAO;QACnJ,SAAS,GAAG;AAAE,kBAAQ,IAAI,aAAa,MAAM,uBAAuB,CAAC;QAAG;AACxE,YAAI;AACA,cAAI,uBAAuB,MAAM;AAC7B,kBAAM,OAAO,oBAAoB,OAAO,cAAc,EAAE,OAAM;AAC9D,gBAAI,QAAQ,CAAC,KAAK,OAAM,GAAI;AACxB,kBAAI,MAAW;AACf,kBAAI;AAAE,sBAAM,KAAK,OAAO,iBAAiB,EAAE,OAAM;cAAI,SAAS,GAAG;AAAE,wBAAQ,IAAI,aAAa,MAAM,2BAA2B,CAAC;cAAG;AACjI,kBAAI,OAAO,MAAM;AACb,oBAAI,IAAS;AACb,oBAAI;AAAE,sBAAI,IAAI;gBAAO,SAAS,GAAG;gBAAE;AACnC,oBAAI,MAAM,QAAQ,MAAM,QAAW;AAAE,sBAAI;AAAE,wBAAI,IAAI,MAAM,SAAS,EAAE;kBAAO,SAAS,GAAG;kBAAE;gBAAE;AAC3F,wBAAQ,IAAI,aAAa,MAAM,mCAAmC,MAAM,QAAQ,MAAM,SAAY,gBAAgB,CAAC,IAAI,aAAa;cACxI,OAAO;AACH,wBAAQ,IAAI,aAAa,MAAM,6BAA6B;cAChE;YACJ,OAAO;AACH,sBAAQ,IAAI,aAAa,MAAM,gCAAgC;YACnE;UACJ,OAAO;AACH,oBAAQ,IAAI,aAAa,MAAM,4BAA4B;UAC/D;QACJ,SAAS,GAAG;AAAE,kBAAQ,IAAI,aAAa,MAAM,uBAAuB,CAAC;QAAG;AACxE,YAAI;AACA,cAAI,gBAAgB,MAAM;AACtB,kBAAM,MAAM,kBAAkB,YAAY;AAC1C,oBAAQ,IAAI,aAAa,MAAM,iBAAiB,OAAO,CAAC,IAAI,OAAM,IAAK,IAAI,SAAS,OAAO;AAC3F,gBAAI,OAAO,CAAC,IAAI,OAAM,GAAI;AACtB,uBAAS,IAAI,GAAG,IAAI,IAAI,QAAQ,KAAK;AACjC,oBAAI;AACA,wBAAM,IAAI,IAAI,IAAI,CAAC;AACnB,wBAAM,UAAU,MAAM;AAAE,wBAAI;AAAE,6BAAO,CAAC,CAAC,EAAE,OAAO,cAAc,EAAE,OAAM;oBAAI,SAAS,GAAG;AAAE,6BAAO;oBAAO;kBAAC,GAAG;AAC1G,wBAAM,WAAW,MAAM;AAAE,wBAAI;AAAE,6BAAO,CAAC,CAAC,EAAE,OAAO,eAAe,EAAE,OAAM;oBAAI,SAAS,GAAG;AAAE,6BAAO;oBAAO;kBAAC,GAAG;AAC5G,0BAAQ,IAAI,uBAAuB,IAAI,cAAc,SAAS,cAAc,OAAO;gBACvF,SAAS,GAAG;gBAAE;cAClB;YACJ;UACJ,OAAO;AACH,oBAAQ,IAAI,aAAa,MAAM,qBAAqB;UACxD;QACJ,SAAS,GAAG;AAAE,kBAAQ,IAAI,aAAa,MAAM,oBAAoB,CAAC;QAAG;MACzE,SAAS,GAAG;AAAE,gBAAQ,IAAI,aAAa,MAAM,kBAAkB,CAAC;MAAG;IAAC;AAGxE,aAAS,gBAAgB,UAAqB;AAC1C,UAAI;AAAE,cAAM,IAAI,SAAS,OAAO,kBAAkB,EAAE,OAAM;AAAI,gBAAQ,IAAI,mCAAmC,CAAC;AAAG;MAAQ,SAAS,GAAG;AAAE,gBAAQ,IAAI,uCAAuC,CAAC;MAAG;AAC9L,UAAI;AAAE,cAAM,IAAI,SAAS,OAAO,oBAAoB,CAAC,EAAE,OAAO,IAAI;AAAG,gBAAQ,IAAI,uCAAuC,CAAC;AAAG;MAAQ,SAAS,GAAG;AAAE,gBAAQ,IAAI,2CAA2C,CAAC;MAAG;AAC7M,UAAI;AAAE,iBAAS,OAAO,eAAe,EAAE,OAAM;AAAI,gBAAQ,IAAI,0BAA0B;MAAG,SAAS,GAAG;AAAE,gBAAQ,IAAI,kCAAkC,CAAC;MAAG;AAC1J,UAAI;AAAE,iBAAS,OAAO,gBAAgB,EAAE,OAAM;AAAI,gBAAQ,IAAI,2BAA2B;MAAG,SAAS,GAAG;AAAE,gBAAQ,IAAI,mCAAmC,CAAC;MAAG;IAAC;AAGlK,aAAS,aAAa,SAAwB;AAE1C,uBAAiB;AACjB,UAAI;AACA,cAAM,WAAW,YAAW;AAC5B,YAAI,YAAY,CAAC,SAAS,OAAM,GAAI;AAChC,cAAI;AAAE,qBAAS,OAAO,aAAa,EAAE,OAAO,UAAU,QAAS,IAAK;UAAG,SAAS,GAAG;UAAE;AACrF,cAAI;AAAE,qBAAS,OAAO,kBAAkB,EAAE,OAAO,UAAU,OAAQ,IAAK;UAAG,SAAS,GAAG;UAAE;AACzF,0BAAgB,QAAQ;QAC5B;MACJ,SAAS,GAAG;MAAE;IAAC;AAGnB,QAAI,kBAAuB;AAC3B,QAAI,uBAAuB;AAC3B,aAAS,iBAAiB,SAAwB;AAE9C,0BAAoB;AACpB,4BAAsB;AACtB,cAAQ,IAAI,8BAA8B,UAAU,SAAS;AAC7D,UAAI;AACA,cAAM,WAAW,YAAW;AAC5B,YAAI,YAAY,QAAQ,SAAS,OAAM,GAAI;AACvC,kBAAQ,IAAI,oEAAoE;AAChF;QACJ;AACA,0BAAkB,UAAU,eAAe;AAC3C,YAAI,QAAQ;AACZ,YAAI;AAAE,mBAAS,OAAO,mBAAmB,EAAE,OAAO,OAAO;AAAG,kBAAQ;AAAM,kBAAQ,IAAI,+BAA+B,UAAU,MAAM;QAAG,SAAS,GAAG;AAAE,kBAAQ,IAAI,sCAAsC,CAAC;QAAG;AAC5M,YAAI;AACA,gBAAM,QAAQ,CAAC,CAAC,SAAS,OAAO,mBAAmB,EAAE,OAAM;AAC3D,kBAAQ,IAAI,oCAAoC,KAAK;AACrD,cAAI,UAAU,SAAS;AACnB,gBAAI;AAAE,uBAAS,MAAM,eAAe,EAAE,QAAQ;AAAS,sBAAQ;AAAM,sBAAQ,IAAI,4CAA4C,OAAO;YAAG,SAAS,GAAG;AAAE,sBAAQ,IAAI,8CAA8C,CAAC;YAAG;UACvN;QACJ,SAAS,GAAG;AAAE,kBAAQ,IAAI,6BAA6B,CAAC;QAAG;AAC3D,YAAI,CAAC,OAAO;AACR,cAAI;AAAE,qBAAS,MAAM,eAAe,EAAE,QAAQ;AAAS,oBAAQ,IAAI,qDAAqD,OAAO;UAAG,SAAS,GAAG;AAAE,oBAAQ,IAAI,yCAAyC,CAAC;UAAG;QAC7M;AACA,YAAI,SAAS;AACT,cAAI;AAAE,qBAAS,OAAO,oBAAoB,EAAE,OAAO,KAAK;AAAG,oBAAQ,IAAI,mCAAmC;UAAG,SAAS,GAAG;AAAE,oBAAQ,IAAI,uCAAuC,CAAC;UAAG;AAClL,cAAI;AAAE,qBAAS,OAAO,qBAAqB,EAAE,OAAO,IAAI;UAAG,SAAS,GAAG;UAAE;AACzE,cAAI;AAAE,qBAAS,OAAO,sBAAsB,EAAE,OAAO,IAAI;UAAG,SAAS,GAAG;UAAE;QAC9E;AACA,gBAAQ,IAAI,4BAA4B,OAAO;AAC/C,YAAI;AACA,gBAAM,KAAK,SAAS,MAAM,OAAO,EAAE;AACnC,kBAAQ,IAAI,4CAA6C,MAAM,CAAC,GAAG,OAAM,IAAM,GAAG,OAAO,SAAS,EAAE,IAAI,OAAO;QACnH,SAAS,GAAG;QAAE;AACd,wBAAgB,QAAQ;AACxB,YAAI;AACA,gBAAM,KAAK,SAAS,MAAM,OAAO,EAAE;AACnC,cAAI,MAAM,CAAC,GAAG,OAAM;AAAI,8BAAkB,GAAG;AAC7C,kBAAQ,IAAI,2CAA4C,MAAM,CAAC,GAAG,OAAM,IAAM,GAAG,OAAO,SAAS,EAAE,IAAI,OAAO;QAClH,SAAS,GAAG;QAAE;AACd,0BAAkB,UAAU,cAAc;MAC9C,SAAS,GAAG;AAAE,gBAAQ,IAAI,gCAAgC,CAAC;MAAG;AAC9D,cAAQ,IAAI,8BAA8B;IAAE;AAGhD,aAAS,kBAAwB;AAC7B,UAAI;AACA,YAAI,CAAC;AAAmB;AACxB,cAAM,WAAW,YAAW;AAC5B,YAAI,YAAY,QAAQ,SAAS,OAAM,GAAI;AAAE,kBAAQ,IAAI,wCAAwC;AAAG;QAAQ;AAC5G,YAAI,MAAM;AACV,YAAI;AAAE,gBAAM,CAAC,CAAC,SAAS,OAAO,mBAAmB,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AAC3E,gBAAQ,IAAI,oDAAoD,GAAG;AACnE,YAAI,KAAK;AACL,cAAI;AACA,kBAAM,KAAK,SAAS,MAAM,OAAO,EAAE;AACnC,gBAAI,MAAM,CAAC,GAAG,OAAM,GAAI;AACpB,oBAAM,IAAI,GAAG;AACb,kBAAI,mBAAmB,QAAQ,MAAM,iBAAiB;AAClD,wBAAQ,IAAI,iDAAiD,gBAAgB,SAAS,EAAE,IAAI,WAAW,EAAE,SAAS,EAAE,IAAI,GAAG;AAC3H,oBAAI,OAAO,uBAAuB,GAAG;AACjC,yCAAuB;AACvB,sBAAI;AAAE,6BAAS,OAAO,mBAAmB,EAAE,OAAO,IAAI;kBAAG,SAAS,GAAG;kBAAE;AACvE,kCAAgB,QAAQ;AACxB,0BAAQ,IAAI,+DAA+D;gBAC/E;cACJ;AACA,gCAAkB;YACtB;UACJ,SAAS,GAAG;UAAE;AACd,kBAAQ,IAAI,iDAAiD;AAC7D;QACJ;AACA,YAAI;AAAE,mBAAS,OAAO,mBAAmB,EAAE,OAAO,IAAI;QAAG,SAAS,GAAG;AAAE,kBAAQ,IAAI,wCAAwC,CAAC;QAAG;AAC/H,YAAI;AACA,cAAI,CAAC,SAAS,OAAO,mBAAmB,EAAE,OAAM,GAAI;AAChD,gBAAI;AAAE,uBAAS,MAAM,eAAe,EAAE,QAAQ;AAAM,sBAAQ,IAAI,iDAAiD;YAAG,SAAS,GAAG;AAAE,sBAAQ,IAAI,0CAA0C,CAAC;YAAG;UAChM;QACJ,SAAS,GAAG;QAAE;AACd,YAAI;AAAE,mBAAS,OAAO,oBAAoB,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AACzE,wBAAgB,QAAQ;AACxB,gBAAQ,IAAI,gDAAgD;MAChE,SAAS,GAAG;AAAE,gBAAQ,IAAI,oCAAoC,CAAC;MAAG;IAAC;AAGvE,aAAS,wBAA6B;AAClC,UAAI;AACA,YAAI,sBAAsB,CAAC,mBAAmB,SAAQ,GAAI;AACtD,cAAI;AAAE,+BAAmB,OAAO,aAAa,EAAE,OAAM;AAAI,mBAAO;UAAoB,SAAS,GAAG;UAAE;QACtG;MACJ,SAAS,GAAG;MAAE;AACd,UAAI;AACA,6BAAqB,aAAa,YAAY,oBAAoB,CAAC,MAAO,MAAO,IAAK,GAAG,GAAG,CAAC,GAAG,GAAG,GAAG,CAAC,CAAC;AACxG,eAAO,OAAO,qBAAqB,CAAC,EAAE,OAAO,kBAAkB;AAC/D,YAAI;AAAE,kBAAQ,aAAa,oBAAoB,WAAW,CAAC;QAAG,SAAS,GAAG;QAAE;AAC5E,YAAI,oBAAoB;AAAM,iBAAO;AACrC,6BAAqB,aAAa,oBAAoB,gBAAgB;AACtE,2BAAmB,OAAO,iBAAiB,EAAE,OAAO,KAAK;AACzD,2BAAmB,OAAO,UAAU,EAAE,OAAO,KAAK;AAClD,2BAAmB,OAAO,kBAAkB,EAAE,OAAO,CAAG;AACxD,2BAAmB,OAAO,YAAY,EAAE,OAAO,CAAG;AAClD,eAAO;MACX,SAAS,GAAG;AAAE,eAAO;MAAM;IAAC;AAGhC,aAAS,sBAAsB,MAAiB;AAC5C,UAAI;AACA,cAAM,SAAS,sBAAqB;AACpC,YAAI,CAAC,UAAU,OAAO,SAAQ;AAAI;AAClC,YAAI;AAAE,iBAAO,OAAO,MAAM,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AACpD,eAAO,OAAO,UAAU,EAAE,OAAO,IAAI;AACrC,eAAO,OAAO,UAAU,EAAE,OAAO,CAAG;AACpC,eAAO,OAAO,YAAY,EAAE,OAAO,CAAG;AACtC,eAAO,OAAO,kBAAkB,EAAE,OAAO,CAAG;AAC5C,eAAO,OAAO,UAAU,EAAE,OAAO,KAAK;AACtC,eAAO,OAAO,UAAU,EAAE,OAAO,KAAK;AACtC,eAAO,OAAO,aAAa,EAAE,OAAO,IAAI;AACxC,eAAO,OAAO,QAAQ,CAAC,EAAE,OAAM;MACnC,SAAS,GAAG;MAAE;IAAC;AAGnB,aAAS,wBAA8B;AACnC,UAAI;AACA,cAAM,MAAM,sBAAqB;AACjC,YAAI,CAAC,OAAO,IAAI,SAAQ;AAAI;AAC5B,YAAI;AAAE,cAAI,OAAO,MAAM,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AACjD,YAAI;AAAE,cAAI,OAAO,UAAU,EAAE,OAAO,IAAI;QAAG,SAAS,GAAG;QAAE;MAC7D,SAAS,GAAG;MAAE;IAAC;AAGnB,aAAS,YAAkB;AACvB,4BAAqB;AACrB,YAAM,WAAW,YAAW;AAC5B,UAAI,YAAY,CAAC,SAAS,OAAM,GAAI;AAChC,YAAI;AACA,cAAI;AAAE,qBAAS,OAAO,eAAe,EAAE,OAAM;UAAI,SAAS,GAAG;UAAE;AAC/D,cAAI;AAAE,qBAAS,OAAO,sBAAsB,EAAE,OAAO,IAAI;UAAG,SAAS,GAAG;UAAE;AAC1E,cAAI;AAAE,qBAAS,OAAO,gBAAgB,EAAE,OAAO,CAAC;UAAG,SAAS,GAAG;UAAE;AACjE,cAAI;AAAE,qBAAS,OAAO,eAAe,EAAE,OAAO,IAAI;UAAG,SAAS,GAAG;UAAE;AACnE,cAAI;AAAE,qBAAS,OAAO,mBAAmB,EAAE,OAAO,KAAK;UAAG,SAAS,GAAG;UAAE;AACxE,cAAI;AAAE,qBAAS,OAAO,qBAAqB,EAAE,OAAO,IAAI;UAAG,SAAS,GAAG;UAAE;AACzE,cAAI;AAAE,qBAAS,OAAO,0BAA0B,EAAE,OAAO,KAAK;UAAG,SAAS,GAAG;UAAE;AAC/E,cAAI;AAAE,qBAAS,OAAO,oBAAoB,EAAE,OAAO,KAAK;UAAG,SAAS,GAAG;UAAE;AACzE,0BAAgB,QAAQ;QAC5B,SAAS,GAAG;QAAE;MAClB;AACA,uBAAiB;AACjB,2BAAqB;IAAK;AAG9B,aAAS,eAAe,UAAkB,QAAyB;AAC3D,YAAM,MAAM,OAAO;AAEnB,YAAM,OAAO,IAAI,SAAS,OAAO,MAAM;AAEvC,UAAI,KAAK,UAAU,GAAG,IAAI,MAAM,YAAY;AAAG,eAAO;MAAM;AAC5D,UAAI,KAAK,UAAU,GAAG,IAAI,MAAM,YAAY;AAAG,eAAO;MAAM;AAE5D,UAAI,SAAS;AACb,UAAI,WAAW;AACf,UAAI,aAAa;AACjB,UAAI,gBAAgB;AACpB,UAAI,aAAa;AACjB,UAAI,WAAW;AAEf,aAAO,SAAS,MAAM,GAAG;AACrB,cAAM,UAAU,KAAK,UAAU,QAAQ,IAAI;AAC3C,cAAM,YAAY,KAAK,UAAU,SAAS,GAAG,IAAI;AACjD,kBAAU;AACV,YAAI,YAAY,WAAY;AACxB,qBAAW,KAAK,UAAU,SAAS,GAAG,IAAI;AAC1C,uBAAa,KAAK,UAAU,SAAS,GAAG,IAAI;AAC5C,0BAAgB,KAAK,UAAU,SAAS,IAAI,IAAI;QACpD,WAAW,YAAY,YAAY;AAC/B,uBAAa;AACb,qBAAW;AACX;QACJ;AACA,kBAAW,YAAY,MAAM,IAAK,YAAY,YAAY;MAC9D;AAEA,UAAI,eAAe,KAAK,aAAa,GAAG;AAAG,eAAO;MAAM;AAGxD,UAAI,cAAc;AAClB,UAAI;AACJ,YAAM,WAAW,IAAI;AACrB,YAAM,SAAS,IAAI;AACnB,UAAI,kBAAkB,IAAI;AACtB,sBAAe,YAAY;AAC3B,cAAM,MAAM,IAAI,WAAW,OAAO,QAAQ,YAAY,WAAW;AACjE,uBAAe,IAAI,aAAa,WAAW;AAC3C,iBAAS,IAAI,GAAG,IAAI,aAAa;AAAK,uBAAa,CAAC,IAAI,IAAI,CAAC,IAAI;MACrE,WAAW,kBAAkB,GAAG;AAC5B,sBAAc;AACd,cAAM,KAAK,IAAI,WAAW,OAAO,QAAQ,YAAY,WAAW;AAChE,uBAAe,IAAI,aAAa,WAAW;AAC3C,iBAAS,IAAI,GAAG,IAAI,aAAa;AAAK,uBAAa,CAAC,KAAK,GAAG,CAAC,IAAI,OAAO;MAC5E,WAAW,kBAAkB,IAAI;AAC7B,sBAAc,YAAY;AAC1B,cAAM,MAAM,IAAI,aAAa,OAAO,QAAQ,YAAY,WAAW;AACnE,uBAAe,IAAI,aAAa,WAAW;AAC3C,qBAAa,IAAI,GAAG;MACxB,OAAO;AAAG,eAAO;MAAM;AAGvB,UAAI,gBAAgB;AAChB,cAAM,QAAQ;AACd,iBAAS,IAAI,GAAG,IAAI,aAAa,QAAQ,KAAK;AAC1C,cAAI,IAAI,aAAa,CAAC,IAAI;AAC1B,cAAI,IAAI;AAAK,gBAAI;AACjB,cAAI,IAAI;AAAM,gBAAI;AAClB,uBAAa,CAAC,IAAI;QACtB;MACJ;AAEA,UAAI,kBAAkB,MAAM;AAAG,eAAO;MAAM;AAC5C,aAAO,oBAAoB,UAAU,cAAc,YAAY,QAAQ;IAAE;AAGjF,aAAS,oBAAoB,UAAkB,cAA4B,YAAoB,UAAuB;AAClH,UAAI;AACA,YAAI,kBAAkB,MAAM;AAAE,iBAAO;QAAM;AAC3C,cAAM,WAAW,4BAA4B,QAAQ;AACrD,cAAM,UAAU,eAAe,UAAU,UAAU,CAAC,KAAK,eAAe,UAAU,UAAU,CAAC,KAAK,eAAe,UAAU,UAAU,CAAC;AACtI,YAAI,CAAC,SAAS;AAAE,iBAAO;QAAM;AAC7B,cAAM,cAAc,aAAa;AACjC,cAAM,aAAoB,CAAC,OAAO,OAAO,QAAQ,GAAG,cAAc,UAAU,UAAU,YAAY,KAAK;AACvG,eAAO,WAAW,SAAS,QAAQ,WAAW;AAAQ,qBAAW,KAAK,IAAI;AAC1E,cAAM,YAAY,QAAQ,OAAO,GAAG,UAAU;AAC9C,cAAM,aAAa,OAAO,OAAO,SAAS,UAAU,EAAE,MAAM,MAAM,eAAe;AACjF,cAAM,aAAa,OAAO,MAAM,YAAY,WAAW;AACvD,YAAI;AACA,qBAAW,SAAS,OAAO,eAAe,IAAI,WAAW,aAAa,MAAM,CAAC;AAC7E,gBAAM,QAAQ,IAAI,aAAa,WAAW,SAAS,OAAO,cAAc,KAAK,IAAI,IAAI,cAAc,CAAC,CAAC,CAAC;AACtG,cAAI,KAAK,IAAI,MAAM,CAAC,IAAI,aAAa,CAAC,CAAC,IAAI,MAAQ;AAE/C,qBAAS,IAAI,GAAG,IAAI,aAAa,QAAQ;AAAK,yBAAW,IAAI,GAAG,aAAa,CAAC,CAAC;UACnF;QACJ,SAAS,GAAG;AAAG,gBAAM;QAAG;AACxB,kBAAU,OAAO,WAAW,CAAC,EAAE,OAAO,YAAY,CAAC;AACnD,eAAO,EAAE,MAAM,WAAW,UAAU,eAAe,aAAa,WAAW,YAAY,SAAQ;MACnG,SAAS,GAAG;AAAE,eAAO;MAAM;IAAC;AAGhC,aAAS,eAAe,UAAkB,KAAsB;AAC5D,UAAI;AACA,YAAI,OAAO,QAAQ,IAAI,SAAS;AAAG,iBAAO;AAC1C,cAAM,cAAc,IAAI,UAAU;AAClC,cAAM,MAAM,IAAI,WAAW,IAAI,QAAQ,IAAI,YAAY,WAAW;AAClE,cAAM,eAAe,IAAI,aAAa,WAAW;AACjD,cAAM,WAAW,IAAI;AACrB,iBAAS,IAAI,GAAG,IAAI,aAAa;AAAK,uBAAa,CAAC,IAAI,IAAI,CAAC,IAAI;AACjE,YAAI,gBAAgB;AAChB,gBAAM,QAAQ;AACd,mBAAS,IAAI,GAAG,IAAI,aAAa,QAAQ,KAAK;AAC1C,gBAAI,IAAI,aAAa,CAAC,IAAI;AAC1B,gBAAI,IAAI;AAAK,kBAAI;AACjB,gBAAI,IAAI;AAAM,kBAAI;AAClB,yBAAa,CAAC,IAAI;UACtB;QACJ;AACA,eAAO,oBAAoB,UAAU,cAAc,OAAO,CAAC;MAC/D,SAAS,GAAG;AAAE,eAAO;MAAM;IAAC;AAGhC,UAAM,kBAAkB;AACxB,QAAI,iBAAsB;AAC1B,aAAS,oBAAyB;AAC9B,UAAI,kBAAkB,CAAC,eAAe,OAAM;AAAI,eAAO;AACvD,YAAM,aAAa,CAAC,0BAA0B,YAAY,kBAAkB,aAAa;AACzF,iBAAW,MAAM,YAAY;AACzB,YAAI;AACA,gBAAM,MAAM,OAAO,OAAO,SAAS,EAAE;AACrC,cAAI,KAAK;AACL,kBAAM,IAAI,IAAI,MAAM,MAAM,aAAa;AACvC,gBAAI,GAAG;AAAE,+BAAiB;AAAG,qBAAO;YAAG;UAC3C;QACJ,SAAS,GAAG;QAAE;MAClB;AACA,aAAO;IAAK;AAEhB,aAAS,wBAAwB,OAAwB;AACrD,YAAM,MAAM,kBAAiB;AAC7B,UAAI,CAAC;AAAK,cAAM,IAAI,MAAM,eAAe;AACzC,YAAM,MAAM,OAAO,MAAM,KAAK,MAAM,MAAM;AAC1C,UAAI,SAAS,OAAO,eAAe,KAAK;AACxC,aAAO;IAAI;AAEf,aAAS,WAAW,KAAyB;AACzC,YAAM,MAAM,IAAI,WAAW,IAAI,MAAM;AACrC,eAAS,IAAI,GAAG,IAAI,IAAI,QAAQ;AAAK,YAAI,CAAC,IAAI,IAAI,WAAW,CAAC,IAAI;AAClE,aAAO;IAAI;AAEf,aAAS,mBAAmB,WAAuB,UAA6D;AAC5G,YAAM,WAAW,aAAa,KAAK,IAAG,EAAG,SAAS,EAAE,IAAI,KAAK,MAAM,KAAK,OAAM,IAAK,GAAG,EAAE,SAAS,EAAE;AACnG,YAAM,WAAW,OAAO,QAAQ,EAAE,QAAQ,oBAAoB,GAAG;AACjE,YAAM,OAAO,OAAO,WAAW,iEAAoE,WAAW;AAC9G,YAAM,OAAO,WAAW,WAAW;AACnC,YAAM,QAAQ,WAAW,IAAI;AAC7B,YAAM,QAAQ,WAAW,IAAI;AAC7B,YAAM,OAAO,IAAI,WAAW,MAAM,SAAS,UAAU,SAAS,MAAM,MAAM;AAC1E,WAAK,IAAI,OAAO,CAAC;AACjB,WAAK,IAAI,WAAW,MAAM,MAAM;AAChC,WAAK,IAAI,OAAO,MAAM,SAAS,UAAU,MAAM;AAC/C,aAAO,EAAE,MAAY,aAAa,mCAAmC,SAAQ;IAAG;AAEpF,aAAS,iBAAiB,WAAuB,aAAqB,QAA6D;AAC/H,UAAI;AACA,YAAI,YAAY;AAChB,YAAI;AAAE,sBAAY,OAAO,OAAO,SAAS,mCAAmC,EAAE;QAAO,SAAS,GAAG;QAAE;AACnG,YAAI,CAAC,WAAW;AAAE,iBAAO,OAAO,IAAI;AAAG;QAAQ;AAC/C,cAAM,WAAW,UAAU,MAAM,wCAAwC;AACzE,cAAM,UAAU,wBAAwB,SAAS;AACjD,cAAM,QAAQ,UAAU,MAAM,yCAAyC;AACvE,cAAM,SAAS,MAAM,MAAK;AAC1B,eAAO,OAAO,SAAS,CAAC,eAAe,CAAC,EAAE,OAAO,OAAO;AACxD,cAAM,QAAQ,UAAU,MAAM,8CAA8C;AAC5E,cAAM,SAAS,MAAM,MAAK;AAC1B,eAAO,OAAO,OAAO,EAAE,OAAM;AAC7B,cAAM,MAAM,SAAS,OAAO,SAAS,CAAC,iBAAiB,iBAAiB,0CAA0C,sCAAsC,CAAC,EACpJ,OAAO,OAAO,OAAO,eAAe,GAAG,OAAO,OAAO,MAAM,GAAG,QAAQ,MAAM;AACjF,YAAI;AAAE,cAAI,OAAO,kBAAkB,EAAE,OAAO,OAAO,OAAO,cAAc,GAAG,OAAO,OAAO,WAAW,CAAC;QAAG,SAAS,GAAG;QAAE;AACtH,YAAI;AAAE,cAAI,OAAO,aAAa,EAAE,OAAO,EAAE;QAAG,SAAS,GAAG;QAAE;AAC1D,YAAI,OAAO,gBAAgB,EAAE,OAAM;AACnC,YAAI,WAAW;AACf,cAAM,OAAO,MAAM;AACf;AACA,cAAI;AACA,gBAAI,IAAI,OAAO,YAAY,EAAE,OAAM,GAAI;AACnC,kBAAI,OAAO;AACX,kBAAI;AAAE,uBAAO,IAAI,OAAO,kBAAkB,EAAE,OAAM;cAAI,SAAS,GAAG;cAAE;AACpE,kBAAI,SAAS,KAAK;AACd,sBAAM,KAAK,IAAI,OAAO,qBAAqB,EAAE,OAAM;AACnD,sBAAM,OAAO,GAAG,OAAO,UAAU,EAAE,OAAM;AACzC,sBAAM,IAAI,KAAK;AACf,sBAAM,QAAQ,IAAI,WAAW,CAAC;AAC9B,oBAAI;AACA,wBAAM,MAAM,IAAI,WAAW,KAAK,SAAS,OAAO,cAAc,CAAC,CAAC;AAChE,wBAAM,IAAI,GAAG;gBACjB,SAAS,GAAG;AACR,2BAAS,IAAI,GAAG,IAAI,GAAG;AAAK,0BAAM,CAAC,IAAI,KAAK,IAAI,CAAC;gBACrD;AACA,uBAAO,MAAM,KAAK;cACtB,OAAO;AACH,uBAAO,OAAO,IAAI;cACtB;AACA;YACJ;AACA,gBAAI,WAAW,KAAK;AAAE,qBAAO,OAAO,IAAI;AAAG;YAAQ;AACnD,uBAAW,MAAM,EAAE;UACvB,SAAS,GAAG;AAAE,mBAAO,OAAO,IAAI;UAAG;QAAC;AAExC,mBAAW,MAAM,EAAE;MACvB,SAAS,GAAG;AAAE,eAAO,OAAO,IAAI;MAAG;IAAC;AAExC,aAAS,iBAAiB,UAAqC;AAC3D,UAAI;AACA,cAAM,YAAY,OAAO,OAAO,SAAS,UAAU,EAAE,MAAM,MAAM,gBAAgB;AACjF,cAAM,YAAY,UAAU,OAAO,gBAAgB,CAAC,EAAE,OAAO,OAAO,OAAO,QAAQ,CAAC;AACpF,YAAI,aAAa,CAAC,UAAU,OAAM,GAAI;AAClC,iBAAO,IAAI,WAAW,UAAU,SAAS,OAAO,cAAc,UAAU,MAAM,CAAC;QACnF;MACJ,SAAS,GAAG;MAAE;AACd,aAAO;IAAK;AAEhB,aAAS,cAAc,UAAkB,QAAiC;AACtE,UAAI;AACA,cAAM,MAAM,iBAAiB,QAAQ,EAAE,YAAW;AAClD,YAAI,SAAS,iBAAiB,QAAQ;AACtC,YAAI,CAAC,UAAU,OAAO,WAAW;AAAG,mBAAS,kBAAkB,QAAQ;AACvE,YAAI,CAAC,UAAU,OAAO,WAAW,GAAG;AAAE,iBAAO,IAAI;AAAG;QAAQ;AAC5D,YAAI,QAAQ,OAAO;AACf,iBAAO,eAAe,UAAU,MAAM,CAAC;AACvC;QACJ;AACA,YAAI,QAAQ,OAAO;AAAE,iBAAO,IAAI;AAAG;QAAQ;AAC3C,cAAM,KAAK,mBAAmB,QAAQ,OAAO,QAAQ,EAAE,MAAM,OAAO,EAAE,IAAG,KAAM,WAAW;AAC1F,yBAAiB,GAAG,MAAM,GAAG,aAAa,CAAC,IAAI,QAAQ;AACnD,iBAAO,MAAM,MAAM,eAAe,UAAU,GAAG,IAAI,IAAI;QAAE,CAC5D;MACL,SAAS,GAAG;AAAE,eAAO,IAAI;MAAG;IAAC;AAGjC,aAAS,YAAY,MAAyB;AAC1C,UAAI;AAAE,eAAO,KAAK,UAAU,GAAG,IAAI,MAAM,cAAc,KAAK,UAAU,GAAG,IAAI,MAAM;MAAY,SACxF,GAAG;AAAE,eAAO;MAAO;IAAC;AAG/B,aAAS,oBAAoB,UAAkB,WAAsB;AACjE,YAAM,WAAW,YAAW;AAC5B,UAAI,CAAC,YAAY,SAAS,OAAM,GAAI;AAAG;MAAQ;AAE/C,UAAI;AACA,YAAI;AAAE,mBAAS,OAAO,eAAe,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AAC/D,YAAI;AAAE,mBAAS,OAAO,gBAAgB,EAAE,OAAO,CAAC;QAAG,SAAS,GAAG;QAAE;AACjE,cAAM,UAAU,EAAE,IAAI,MAAM,KAAK,GAAE;AACnC,YAAI;AAAE,mBAAS,OAAO,eAAe,EAAE,OAAO,UAAU,IAAI;QAAG,SAAS,GAAG;AAAE,kBAAQ,KAAK;AAAO,kBAAQ,MAAM,OAAO,CAAC;QAAG;AAC1H,YAAI;AAAE,mBAAS,OAAO,mBAAmB,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AACxE,YAAI;AAAE,mBAAS,OAAO,qBAAqB,EAAE,OAAO,IAAI;QAAG,SAAS,GAAG;QAAE;AACzE,YAAI;AAAE,mBAAS,OAAO,sBAAsB,EAAE,OAAO,IAAI;QAAG,SAAS,GAAG;QAAE;AAC1E,YAAI;AAAE,mBAAS,OAAO,kBAAkB,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AACvE,YAAI;AAAE,mBAAS,OAAO,oBAAoB,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AACzE,YAAI;AAAE,mBAAS,OAAO,6BAA6B,EAAE,OAAO,KAAK;QAAG,SAAS,GAAG;QAAE;AAClF,YAAI;AAAE,mBAAS,OAAO,mBAAmB,EAAE,OAAO,iBAAiB;QAAG,SAAS,GAAG;QAAE;AACpF,YAAI,gBAAgB;AAChB,cAAI;AAAE,qBAAS,OAAO,aAAa,EAAE,OAAO,KAAM;UAAG,SAAS,GAAG;UAAE;AACnE,cAAI;AAAE,qBAAS,OAAO,kBAAkB,EAAE,OAAO,IAAK;UAAG,SAAS,GAAG;UAAE;QAC3E;AACA,YAAI,CAAC,QAAQ,IAAI;AAAG;QAAQ;AAC5B,wBAAgB,QAAQ;AACxB,YAAI;AAAE,mBAAS,OAAO,gBAAgB,EAAE,OAAM;QAAI,SAAS,GAAG;AAAG;QAAQ;AACzE,yBAAiB;AACjB,uBAAe,OAAO,UAAU,WAAW;AAC3C,6BAAqB,UAAU;MAEnC,SAAS,GAAG;MAAG;IAAC;AAGpB,aAAS,UAAU,UAAwB;AACvC,UAAI;AAAgB,kBAAS;AAC7B,oBAAc,UAAU,CAAC,OAAO;AAC5B,YAAI;AAAI,8BAAoB,UAAU,EAAE;MAAE,CAC7C;IAAE;AAGP,QAAI,WAAgB;AACpB,QAAI,WAAgB;AACpB,QAAI,YAAiB;AACrB,QAAI,YAAiB;AACrB,QAAI,cAAmB;AACvB,QAAI,cAAmB;AACvB,QAAI,eAAoB;AACxB,aAAS,aAAa;AAClB,UAAI;AAAU,eAAO;AACrB,UAAI;AACA,cAAM,UAAU,QAAQ,iBAAiB,SAAS;AAClD,YAAI,CAAC;AAAS,iBAAO;AACrB,cAAM,MAAM,CAAC,SAAiB;AAC1B,cAAI;AACA,kBAAM,IAAI,QAAQ,iBAAiB,IAAI;AACvC,mBAAO,KAAK,CAAC,EAAE,OAAM,IAAK,IAAI;UAClC,SAAS,GAAG;AAAE,mBAAO;UAAM;QAAC;AAEhC,mBAAW,IAAI,eAAe,IAAI,MAAM,KAAK,MAAM,OAAO,CAAC,WAAW,KAAK,CAAC;AAC5E,mBAAW,IAAI,eAAe,IAAI,MAAM,KAAK,MAAM,QAAQ,CAAC,OAAO,WAAW,OAAO,CAAC;AACtF,oBAAY,IAAI,eAAe,IAAI,SAAS,KAAK,MAAM,QAAQ,CAAC,OAAO,QAAQ,KAAK,CAAC;AACrF,YAAI,UAAU,OAAM;AAAI,sBAAY,IAAI,eAAe,IAAI,OAAO,KAAK,MAAM,QAAQ,CAAC,OAAO,QAAQ,KAAK,CAAC;AAC3G,oBAAY,IAAI,eAAe,IAAI,OAAO,KAAK,MAAM,OAAO,CAAC,KAAK,CAAC;AACnE,sBAAc,IAAI,eAAe,IAAI,SAAS,KAAK,MAAM,WAAW,CAAC,SAAS,CAAC;AAC/E,sBAAc,IAAI,eAAe,IAAI,WAAW,KAAK,MAAM,WAAW,CAAC,SAAS,CAAC;AACjF,YAAI,YAAY,OAAM;AAAI,wBAAc,IAAI,eAAe,IAAI,SAAS,KAAK,MAAM,WAAW,CAAC,SAAS,CAAC;AACzG,uBAAe,IAAI,eAAe,IAAI,UAAU,KAAK,MAAM,OAAO,CAAC,SAAS,CAAC;AAC7E,eAAO,CAAC,SAAS,OAAM;MAC3B,SAAS,GAAG;AAAG,eAAO;MAAO;IAAC;AAElC,aAAS,kBAAkB,UAAqC;AAC5D,UAAI;AACA,YAAI,CAAC,WAAU,GAAI;AAAG,iBAAO;QAAM;AACnC,cAAM,OAAO,OAAO,gBAAgB,QAAQ;AAC5C,cAAM,KAAK,SAAS,MAAM,CAAC;AAC3B,YAAI,KAAK,GAAG;AAAG,iBAAO;QAAM;AAC5B,cAAM,OAAO,OAAO,UAAU,IAAI,GAAG,CAAC,CAAC;AACvC,YAAI,QAAQ,GAAG;AAAG,iBAAO;QAAM;AAC/B,kBAAU,IAAI,GAAG,CAAC;AAClB,cAAM,MAAM,OAAO,MAAM,IAAI;AAC7B,cAAM,MAAM,OAAO,SAAS,IAAI,KAAK,IAAI,CAAC;AAC1C,kBAAU,EAAE;AACZ,YAAI,OAAO,GAAG;AAAG,iBAAO;QAAM;AAE9B,eAAO,IAAI,WAAW,IAAI,cAAc,GAAG,CAAC;MAChD,SAAS,GAAG;AAAG,eAAO;MAAM;IAAC;AAEjC,aAAS,aAAa,KAAuB;AACzC,YAAM,MAAgB,CAAA;AACtB,UAAI;AACA,YAAI,CAAC,WAAU;AAAI,iBAAO;AAC1B,cAAM,YAAY,YAAY,OAAO,gBAAgB,GAAG,CAAC;AACzD,YAAI,UAAU,OAAM;AAAI,iBAAO;AAC/B,mBAAS;AACL,gBAAM,QAAQ,YAAY,SAAS;AACnC,cAAI,MAAM,OAAM;AAAI;AACpB,gBAAM,SAAS,MAAM,IAAI,EAAE,EAAE,eAAc;AAC3C,cAAI,CAAC;AAAQ;AACb,cAAI,WAAW,OAAO,WAAW;AAAM;AACvC,cAAI,OAAO,YAAW,EAAG,SAAS,MAAM,KAAK,OAAO,YAAW,EAAG,SAAS,MAAM;AAAG,gBAAI,KAAK,MAAM,MAAM,MAAM;QACnH;AACA,qBAAa,SAAS;MAC1B,SAAS,GAAG;MAAG;AACf,aAAO;IAAI;AAGf,aAAS,cAAc,MAAc,OAA0B;AAC3D,UAAI;AACA,cAAM,IAAI,IAAI,KAAK,MAAM,GAAG;AAC5B,UAAE,MAAM,MAAM,KAAK,IAAI,CAAC;AACxB,UAAE,MAAK;AACP,UAAE,MAAK;AACP,eAAO;MACX,SAAS,GAAG;AAER,eAAO;MACX;IAAC;AAGL,QAAI,UAAyB;AAC7B,aAAS,aAAqB;AAC1B,UAAI,WAAW;AAAM,eAAO;AAC5B,UAAI;AACA,cAAM,WAAW,gBAAgB,MAAM,yBAAyB;AAChE,cAAM,MAAM,OAAO,SAAS,OAAO,wBAAwB,EAAE,OAAM,GAAI,WAAW,EAAE;AACpF,YAAI,KAAK;AAAE,oBAAU,MAAM;AAAK,iBAAO;QAAS;MACpD,SAAS,GAAG;MAAE;AACd,gBAAU;AACV,aAAO;IAAQ;AAGnB,aAAS,gBAAsB;AAE3B,uBAAiB,qBAAqB,OAAO,EAAE;AAC/C,UAAI;AACA,cAAM,MAAM,WAAU;AACtB,eAAO,KAAK,eAAe,GAAG;AAE9B,yBAAiB,sBAAsB,OAAO,EAAE;MACpD,SAAS,GAAG;AAER,yBAAiB,kBAAkB,GAAG,OAAO,EAAE;MACnD;IAAC;AAEL,aAAS,oBAA0B;AAC/B,UAAI;AACA,YAAI,CAAC,uBAAuB;AAAG;QAAQ;AACvC,cAAM,kBAAkB,sBAAsB,MAAM,uBAAuB;AAC3E,cAAM,SAAS,UAAU,OAAO,sBAAsB,EAAE,SAAS,aAAa,EAAE,OAAO,gBAAgB,KAAK,MAAM;AAClH,cAAM,QAAkB,CAAA;AACxB,cAAM,KAAK,8BAA8B,OAAO,MAAM;AACtD,cAAM,SAAS,oBAAI,IAAG;AACtB,iBAAS,IAAI,GAAG,IAAI,OAAO,QAAQ,KAAK;AACpC,cAAI;AACA,kBAAM,OAAO,OAAO,IAAI,CAAC;AACzB,gBAAI,CAAC,QAAQ,KAAK,OAAM;AAAI;AAC5B,kBAAM,KAAK,KAAK,OAAO,gBAAgB,EAAE,OAAM;AAC/C,gBAAI,CAAC,MAAM,GAAG,OAAM;AAAI;AACxB,kBAAM,OAAO,GAAG,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ;AACpD,mBAAO,IAAI,OAAO,IAAI,CAAC;UAC3B,SAAS,GAAG;UAAE;QAClB;AACA,eAAO,QAAQ,UAAQ,MAAM,KAAK,IAAI,CAAC;AACvC,cAAM,OAAO,WAAU,IAAK;AAC5B,cAAM,KAAK,cAAc,MAAM,KAAK;AAEpC,yBAAiB,KAAK,mBAAmB,uBAAuB,OAAO,CAAC;MAC5E,SAAS,GAAG;AAER,yBAAiB,yBAAyB,GAAG,OAAO,CAAC;MACzD;IAAC;AAEL,aAAS,iBAAuB;AAC5B,UAAI;AACA,cAAM,QAAkB,CAAA;AACxB,mBAAW,OAAO,OAAO,OAAO,YAAY;AACxC,cAAI;AAAE,kBAAM,KAAK,OAAO,IAAI,IAAI,IAAI,QAAQ,OAAO,IAAI,MAAM,QAAQ,MAAM,IAAI,UAAU;UAAG,SACrF,GAAG;AAAE,kBAAM,KAAK,OAAO,GAAG,CAAC;UAAG;QACzC;AACA,cAAM,OAAO,WAAU,IAAK;AAC5B,cAAM,KAAK,cAAc,MAAM,KAAK;AAEpC,yBAAiB,KAAK,sBAAsB,wBAAwB,OAAO,CAAC;MAChF,SAAS,GAAG;MAEZ;IAAC;AAGL,aAAS,wBAAkC;AACvC,YAAM,OAAiB,CAAA;AACvB,UAAI;AACA,cAAM,WAAW,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,yBAAyB;AACvG,YAAI;AACA,gBAAM,MAAM,OAAO,SAAS,OAAO,wBAAwB,EAAE,OAAM,GAAI,WAAW,EAAE;AACpF,cAAI;AAAK,iBAAK,KAAK,MAAM,SAAS;QACtC,SAAS,GAAG;QAAE;AACd,YAAI;AACA,gBAAM,KAAK,OAAO,SAAS,OAAO,cAAc,EAAE,OAAM,GAAI,WAAW,EAAE;AACzE,cAAI,IAAI;AACJ,kBAAM,SAAS,GAAG,QAAQ,iBAAiB,EAAE,EAAE,QAAQ,sBAAsB,EAAE;AAC/E,gBAAI,UAAU,WAAW;AAAI,mBAAK,KAAK,SAAS,SAAS;UAC7D;QACJ,SAAS,GAAG;QAAE;AACd,YAAI;AACA,gBAAM,KAAK,OAAO,SAAS,OAAO,gBAAgB,EAAE,OAAM,GAAI,WAAW,EAAE;AAC3E,cAAI;AAAI,iBAAK,KAAK,0BAA0B,KAAK,eAAe;QACpE,SAAS,GAAG;QAAE;MAClB,SAAS,GAAG;MAAE;AACd,aAAO;IAAK;AAGhB,aAAS,2BAAiC;AACtC,YAAM,oBAAkC;QACpC,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,8BAAkB;AAAG,0BAAc;AAAG,uBAAU;UAAG;UACnE,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AACV,kBAAM,QAAQ,eAAc;AAC5B,4BAAgB;AAChB,kCAAsB;AACtB,+BAAmB,KAAK,IAAG;AAC3B,0BAAc,OAAO,CAAC;AACtB,6BAAiB,eAAe,MAAM,SAAS,cAAc,OAAO,CAAC;AACrE,qCAAwB;AACxB,uBAAU;UAAG;UAEjB,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;AAAE,sBAAS;UAAG;UAC5B,aAAa;SAChB;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;UAAC;UACf,cAAc,MAAM;AAAE,gCAAoB;AAAM,6BAAiB,IAAI;AAAG,uBAAU;UAAG;UACrF,eAAe,MAAM;AAAE,gCAAoB;AAAO,6BAAiB,KAAK;AAAG,uBAAU;UAAG;UACxF,aAAa;UACb,SAAS;SACZ;QACD,IAAI,WAAW;UACX,YAAY;UACZ,QAAQ,MAAM;UAAC;UACf,cAAc,MAAM;AAAE,6BAAiB;AAAM,yBAAa,IAAI;AAAG,uBAAU;UAAG;UAC9E,eAAe,MAAM;AAAE,6BAAiB;AAAO,yBAAa,KAAK;AAAG,uBAAU;UAAG;UACjF,aAAa;UACb,SAAS;SACZ;;AAGL,YAAM,eAAyB,eAAc;AAC7C,UAAI,aAAa,WAAW,GAAG;AAEvB,cAAM,SAAS,sBAAqB,EAAG,CAAC,KAAK;AAC7C,YAAI;AAAE,iBAAO,OAAO,SAAS,UAAU,EAAE,MAAM,MAAM,qBAAqB,EAAE,OAAO,mBAAmB,CAAC,EAAE,OAAO,OAAO,OAAO,MAAM,CAAC;QAAG,SAAS,GAAG;QAAE;AACtJ,0BAAkB,KAAK,IAAI,WAAW;UAClC,YAAY;UACZ,QAAQ,MAAM;UAAC;UACf,aAAa;SAChB,CAAC;MACN,OAAO;AACH,mBAAW,YAAY,cAAc;AACjC,gBAAM,WAAW,4BAA4B,QAAQ;AACrD,4BAAkB,KAAK,IAAI,WAAW;YAClC,YAAY;YACZ,QAAQ,MAAM;AACV,kBAAI,oBAAoB,UAAU;AAC9B,kCAAkB;AAClB,sBAAM,SAAS,gBAAgB,IAAI,QAAQ;AAC3C,oBAAI,QAAQ;AAAE,sCAAoB,UAAU,MAAM;gBAAG,OAChD;AACD,gCAAc,UAAU,CAAC,OAAO;AAAE,wBAAI,IAAI;AAAE,sCAAgB,IAAI,UAAU,EAAE;AAAG,0CAAoB,UAAU,EAAE;oBAAG;kBAAC,CAAE;gBACzH;cACJ,OAAO;AACH,kCAAkB;AAClB,oBAAI,gBAAgB,IAAI,QAAQ,GAAG;AAC/B,oCAAkB;gBACtB,OAAO;AACH,gCAAc,UAAU,CAAC,OAAO;AAAE,wBAAI,IAAI;AAAE,sCAAgB,IAAI,UAAU,EAAE;AAAG,wCAAkB;oBAAU;kBAAC,CAAE;gBAClH;cACJ;YAAC;YAEL,aAAa;WAChB,CAAC;QACN;MACJ;AACJ,cAAQ,EAAE,IAAI;AACd,uBAAgB;AAEhB,sBAAgB;IAAa;AAGjC,aAAS,iBAA2B;AAChC,YAAM,UAAoB,CAAA;AAC1B,UAAI;AACA,cAAM,WAAW,OAAO,OAAO,SAAS,UAAU,EAAE,MAAM,MAAM,qBAAqB;AACrF,cAAM,OAAO,sBAAqB;AAClC,mBAAW,OAAO,MAAM;AACpB,cAAI,MAAgB,CAAA;AACpB,cAAI;AACA,kBAAM,SAAS,SAAS,OAAO,UAAU,CAAC,EAAE,OAAO,OAAO,OAAO,GAAG,CAAC;AACrE,gBAAI,CAAC;AAAQ;AACb,gBAAI;AACA,oBAAM,QAAQ,SAAS,OAAO,YAAY,CAAC,EAAE,OAAO,OAAO,OAAO,GAAG,GAAG,OAAO,OAAO,OAAO,CAAC;AAC9F,kBAAI,SAAS,CAAC,MAAM,OAAM,GAAI;AAC1B,yBAAS,IAAI,GAAG,IAAI,MAAM,QAAQ,KAAK;AACnC,wBAAM,KAAK,OAAO,MAAM,IAAI,CAAC,GAAG,WAAW,MAAM,IAAI,CAAC,GAAG,WAAU,KAAM,EAAE;AAC3E,wBAAM,MAAM,iBAAiB,EAAE;AAC/B,sBAAI,QAAQ,SAAS,QAAQ;AAAO,wBAAI,KAAK,EAAE;gBACnD;cACJ;YACJ,SAAS,GAAG;AAER,oBAAM,aAAa,GAAG;YAC1B;AACA,gBAAI;AACA,oBAAM,SAAS,SAAS,OAAO,YAAY,CAAC,EAAE,OAAO,OAAO,OAAO,GAAG,GAAG,OAAO,OAAO,OAAO,CAAC;AAC/F,kBAAI,UAAU,CAAC,OAAO,OAAM,GAAI;AAC5B,yBAAS,IAAI,GAAG,IAAI,OAAO,QAAQ,KAAK;AACpC,wBAAM,KAAK,OAAO,OAAO,IAAI,CAAC,GAAG,WAAW,OAAO,IAAI,CAAC,GAAG,WAAU,KAAM,EAAE;AAC7E,wBAAM,MAAM,iBAAiB,EAAE;AAC/B,sBAAI,QAAQ,SAAS,QAAQ;AAAO,wBAAI,KAAK,EAAE;gBACnD;cACJ;YACJ,SAAS,GAAG;YAAE;AACd,gBAAI,IAAI,WAAW;AAAG,oBAAM,aAAa,GAAG;AAC5C,uBAAW,MAAM;AAAK,sBAAQ,KAAK,EAAE;AAErC,gBAAI,QAAQ,SAAS;AAAG;UAC5B,SAAS,GAAG;UAAG;QACnB;MACJ,SAAS,GAAG;MAAG;AACf,aAAO;IAAQ;AAGnB,QAAI,sBAAsB;AAC1B,QAAI,mBAAmB;AACvB,aAAS,uBAA6B;AAClC,UAAI;AAAqB;AACzB,4BAAsB;AACtB,UAAI;AACA,cAAM,QAAQ,eAAc;AAC5B,wBAAgB;AAChB,YAAI,MAAM,SAAS,GAAG;AAClB,6BAAmB,KAAK,IAAG;AAC3B,wBAAc,OAAO,CAAC;QAC1B;MACJ,SAAS,GAAG;MAAE;IAAC;AAGnB,QAAI,mBAAmB;AACvB,aAAS,uBAA6B;AAClC,UAAI;AAAkB;AACtB,yBAAmB;AACnB,UAAI,QAAQ;AACZ,YAAM,QAAQ,MAAM;AAChB;AACA,YAAI;AACA,gBAAM,KAAK,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,oBAAoB;AAC5F,gBAAM,MAAM,GAAG,OAAO,UAAU,EAAE,OAAM;AACxC,cAAI,OAAO,CAAC,IAAI,OAAM,GAAI;AAAE,iCAAoB;AAAI;UAAQ;QAChE,SAAS,GAAG;QAAE;AACd,YAAI,SAAS,IAAI;AAAE,+BAAoB;AAAI;QAAQ;AACnD,mBAAW,OAAO,GAAI;MAAE;AAE5B,iBAAW,OAAO,GAAK;IAAE;AAE7B,yBAAoB;AAEpB,QAAI,mBAAmB;AACvB,QAAI,kBAAkB;AACtB,QAAI,uBAAuB;AAC3B,UAAM,qBAAqB;AAC3B,aAAS,cAAc,OAAiB,WAAyB;AAC7D,UAAI,cAAc,GAAG;AACjB,2BAAmB;AACnB,0BAAkB;AAClB,+BAAuB;MAC3B;AACA,YAAM,SAAS,MAAM;AACjB,eAAO,kBAAkB,sBAAsB,YAAY,MAAM,QAAQ;AACrE,gBAAM,WAAW,MAAM,SAAS;AAChC;AACA;AACA,gBAAM,UAAU,MAAM;AAClB;AACA;AACA,gBAAI,mBAAmB,OAAO,KAAK,qBAAqB,MAAM,QAAQ;AAClE,oBAAM,UAAU,KAAK,IAAI,GAAG,KAAK,IAAG,IAAK,gBAAgB;AACzD,oBAAM,MAAM,UAAU;AACtB,oBAAM,YAAY,MAAM,SAAS;AACjC,oBAAM,SAAS,KAAK,KAAK,MAAM,YAAY,GAAI;AAC/C,+BAAiB,gBAAgB,mBAAmB,MAAM,MAAM,SAAS,qBAAqB,SAAS,KAAK,OAAO,CAAC;YACxH;AACA,gBAAI,oBAAoB,MAAM,QAAQ;AAClC,kBAAI,CAAC,sBAAsB;AACvB,uCAAuB;AACvB,sBAAM,UAAU,KAAK,IAAI,GAAG,KAAK,IAAG,IAAK,gBAAgB;AACzD,sBAAM,YAAY,UAAU,KAAM,QAAQ,CAAC;AAC3C,wBAAQ,IAAI,wBAAwB,MAAM,SAAS,eAAe,WAAW,GAAG;AAChF,iCAAiB,SAAS,MAAM,SAAS,0BAA0B,WAAW,KAAK,KAAK;cAC5F;YACJ,WAAW,YAAY,MAAM,QAAQ;AACjC,qBAAM;YACV;UAAC;AAEL,cAAI,gBAAgB,IAAI,QAAQ,GAAG;AAC/B,oBAAO;UACX,OAAO;AACH,gBAAI;AACA,4BAAc,UAAU,CAAC,OAAO;AAC5B,oBAAI;AAAI,kCAAgB,IAAI,UAAU,EAAE;AACxC,wBAAO;cAAG,CACb;YACL,SAAS,GAAG;AAAE,sBAAO;YAAI;UAC7B;QACJ;MAAC;AAEL,aAAM;IAAG;AAGjB,aAAS,mBAAmB,MAAsB;AAC9C,aAAO,OAAO,IAAI,EAAE,QAAQ,SAAS,EAAE,EAAE,KAAI,EAAG,YAAW;IAAG;AAGlE,aAAS,eAAe,SAAsB;AAC1C,UAAI;AACA,cAAM,OAAO,mBAAmB,OAAO;AACvC,YAAI,oBAAoB,MAAM;AAC1B,iBAAO;QACX;AAEA,cAAM,QAAQ,CAAC,OAAiB;AAC5B,cAAI;AACA,gBAAI,MAAM,QAAQ,GAAG,OAAM;AAAI,qBAAO;AACtC,kBAAM,OAAO,GAAG,OAAO,UAAU,EAAE,OAAM;AACzC,gBAAI,QAAQ,QAAQ,KAAK,OAAM;AAAI,qBAAO;AAC1C,kBAAM,KAAK,OAAO,KAAK,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,CAAE;AAC7D,kBAAM,MAAM,mBAAmB,EAAE;AACjC,gBAAI,QAAQ,QAAQ,IAAI,QAAQ,IAAI,MAAM,IAAI;AAC1C,gCAAkB;AAClB,kBAAI,qBAAqB,QAAQ,kBAAkB,OAAM;AAAI,oCAAoB;AACjF,qBAAO;YACX;UACJ,SAAS,GAAG;UACZ;AACA,iBAAO;QAAK;AAGhB,cAAM,aAAa,OAAO,OAAO,mBAAmB,EAC/C,SAAS,eAAe,gBAAgB,EACxC,OAAO,iBAAiB,KAAK,QAAQ,IAAI;AAE9C,YAAI,cAAc,MAAM;AACpB,mBAAS,KAAK,GAAG,KAAK,WAAW,QAAQ,MAAM;AAC3C,kBAAM,IAAI,MAAM,WAAW,IAAI,EAAE,CAAC;AAClC,gBAAI,KAAK,QAAQ,CAAC,EAAE,OAAM;AAAI,qBAAO;UACzC;QACJ;MAEJ,SAAS,GAAG;MACZ;AACA,aAAO;IAAK;AAGhB,aAAS,mBAAwB;AAC7B,YAAM,kBAAkB,CAAC,YAAY,gBAAgB,SAAS,2CAA2C;AAEzG,iBAAW,aAAa,iBAAiB;AACrC,cAAM,OAAO,eAAe,SAAS;AACrC,YAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM,GAAI;AAChC,iBAAO;QACX;MACJ;AAEA,aAAO;IAAK;AAGhB,aAAS,iBAA0B;AAC/B,UAAI;AACA,YAAI;AACA,gBAAM,OAAO,WAAU;AACvB,cAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM,GAAI;AAChC,kBAAM,OAAO,KAAK,MAAM,iBAAiB,EAAE;AAC3C,gBAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM,GAAI;AAChC,kBAAI;AAAE,qBAAK,OAAO,UAAU,EAAE,OAAO,IAAI;AAAG,uBAAO;cAAM,SAAS,GAAG;cAAE;YAC3E;UACJ;QACJ,SAAS,GAAG;QAAE;AACd,YAAI,mBAAmB,QAAQ,gBAAgB,OAAM,GAAI;AACrD,gBAAM,OAAO,iBAAgB;AAC7B,cAAI,QAAQ,QAAQ,KAAK,OAAM;AAAI,mBAAO;AAC1C,4BAAkB;QACtB;AACA,YAAI,MAAM,sBAAqB;AAC/B,YAAI,OAAO,QAAQ,IAAI,OAAM;AAAI,iBAAO;AACxC,YAAI;AAAE,cAAI,OAAO,gBAAgB,EAAE,OAAM,EAAG,OAAO,WAAW,EAAE,OAAO,IAAI;QAAG,SAAS,GAAG;QAAE;AAC5F,YAAI;AAAE,cAAI,OAAO,aAAa,EAAE,OAAO,IAAI;QAAG,SAAS,GAAG;QAAE;AAC5D,YAAI;AAAE,cAAI,OAAO,QAAQ,CAAC,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AACpD,YAAI,OAAO,UAAU,EAAE,OAAO,eAAe;AAC7C,YAAI,OAAO,UAAU,EAAE,OAAO,CAAG;AACjC,YAAI,OAAO,YAAY,EAAE,OAAO,CAAG;AACnC,YAAI,OAAO,kBAAkB,EAAE,OAAO,CAAG;AACzC,YAAI,OAAO,UAAU,EAAE,OAAO,KAAK;AACnC,YAAI,OAAO,UAAU,EAAE,OAAO,KAAK;AACnC,YAAI,KAAK;AACT,YAAI;AAAE,cAAI,OAAO,MAAM,EAAE,OAAM;AAAI,eAAK;QAAM,SAAS,GAAG;AACtD,cAAI;AAAE,gBAAI,OAAO,QAAQ,CAAC,EAAE,OAAM;AAAI,iBAAK;UAAM,SAAS,IAAI;AAC1D,gBAAI;AAAE,kBAAI,OAAO,QAAQ,CAAG,EAAE,OAAM;AAAI,mBAAK;YAAM,SAAS,IAAI;YAAE;UACtE;QACJ;AACA,YAAI,CAAC,IAAI;AACL,cAAI;AAAE,iCAAqB;UAAM,SAAS,GAAG;UAAE;AAC/C,gBAAM,QAAQ,sBAAqB;AACnC,cAAI,SAAS,QAAQ,CAAC,MAAM,OAAM,GAAI;AAClC,gBAAI;AAAE,oBAAM,OAAO,UAAU,EAAE,OAAO,eAAe;YAAG,SAAS,GAAG;YAAE;AACtE,gBAAI;AAAE,oBAAM,OAAO,YAAY,EAAE,OAAO,CAAG;YAAG,SAAS,GAAG;YAAE;AAC5D,gBAAI;AAAE,oBAAM,OAAO,kBAAkB,EAAE,OAAO,CAAG;YAAG,SAAS,GAAG;YAAE;AAClE,gBAAI;AAAE,oBAAM,OAAO,UAAU,EAAE,OAAO,KAAK;YAAG,SAAS,GAAG;YAAE;AAC5D,gBAAI;AAAE,oBAAM,OAAO,MAAM,EAAE,OAAM;YAAI,SAAS,GAAG;YAAE;UACvD;QACJ;AACA,eAAO;MACX,SAAS,GAAG;AACR,eAAO;MACX;IAAC;AAGL,aAAS,cAAc,UAA2B;AAC9C,UAAI;AACA,cAAM,OAAO,eAAe,QAAQ;AACpC,YAAI,QAAQ,QAAQ,KAAK,OAAM,GAAI;AAC/B,iBAAO;QACX;AACA,YAAI,MAAM,sBAAqB;AAC/B,YAAI,OAAO,QAAQ,IAAI,OAAM,GAAI;AAC7B,iBAAO;QACX;AACA,YAAI;AAAE,cAAI,OAAO,QAAQ,CAAC,EAAE,OAAM;QAAI,SAAS,GAAG;QAAE;AACpD,YAAI,OAAO,UAAU,EAAE,OAAO,IAAI;AAClC,YAAI,OAAO,UAAU,EAAE,OAAO,CAAG;AACjC,YAAI,OAAO,YAAY,EAAE,OAAO,CAAG;AACnC,YAAI,OAAO,kBAAkB,EAAE,OAAO,CAAG;AACzC,YAAI,OAAO,UAAU,EAAE,OAAO,KAAK;AACnC,YAAI,OAAO,UAAU,EAAE,OAAO,KAAK;AACnC,YAAI,OAAO,aAAa,EAAE,OAAO,IAAI;AACrC,YAAI;AACA,cAAI,OAAO,MAAM,EAAE,OAAM;QAC7B,SAAS,GAAG;AACR,cAAI;AACA,gBAAI,OAAO,QAAQ,CAAC,EAAE,OAAM;UAChC,SAAS,IAAI;AACT,mBAAO;UACX;QACJ;AACA,eAAO;MACX,SAAS,GAAG;AACR,eAAO;MACX;IAAC;AAID,aAAS,gBAAwB;AAC7B,YAAM,OAAoB,oBAAI,IAAG;AACjC,UAAI;AACA,YAAI,oBAAoB,MAAM;AAC1B,gBAAM,WAAW,CAAC,SAAc;AAC5B,qBAAS,KAAK,GAAG,KAAK,KAAK,QAAQ,MAAM;AACrC,kBAAI;AACA,sBAAM,KAAK,KAAK,IAAI,EAAE;AACtB,oBAAI,MAAM,QAAQ,GAAG,OAAM;AAAI;AAC/B,sBAAM,OAAO,GAAG,OAAO,UAAU,EAAE,OAAM;AACzC,oBAAI,QAAQ,QAAQ,KAAK,OAAM;AAAI;AACnC,sBAAM,KAAK,OAAO,KAAK,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,CAAE;AAC7D,sBAAM,KAAK,GAAG,OAAO,gBAAgB,EAAE,OAAM;AAC7C,sBAAM,KAAM,MAAM,QAAQ,CAAC,GAAG,OAAM,IAAM,OAAO,GAAG,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,CAAE,IAAI;AAC9F,sBAAM,MAAM,KAAK,MAAM;AACvB,oBAAI,KAAK,IAAI,GAAG;AAAG;AACnB,qBAAK,IAAI,GAAG;AACZ,wBAAQ,IAAI,mBAAmB,KAAK,WAAW,KAAK,GAAG;cAC3D,SAAS,GAAG;cAAE;YAClB;UAAC;AAEL,gBAAM,QAAQ,kBAAkB,gBAAgB;AAChD,cAAI,SAAS;AAAM,qBAAS,KAAK;AACjC,gBAAM,cAAc,OAAO,OAAO,mBAAmB,EAAE,SAAS,eAAe,gBAAgB,EAAE,OAAO,iBAAiB,KAAK,QAAQ,IAAI;AAC1I,cAAI,eAAe;AAAM,qBAAS,WAAW;QACjD;MACJ,SAAS,GAAG;MAAE;AACd,aAAO,KAAK;IAAK;AAGrB,aAAS,aAAmB;AACxB,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,WAAgB;AACpB,cAAI;AACA,kBAAM,KAAK,cAAc,OAAO,iBAAiB,EAAE,OAAM;AACzD,gBAAI,MAAM,QAAQ,CAAC,GAAG,OAAM;AAAI,yBAAW,GAAG,OAAO,UAAU,EAAE,OAAM;UAC3E,SAAS,GAAG;UAAE;AACd,cAAI,YAAY,QAAQ,SAAS,OAAM,KAAM,CAAC,SAAS,SAAS;AAAE,6BAAiB,qBAAqB,OAAO,CAAC;AAAG;UAAQ;AAC3H,gBAAM,KAAK,cAAc,OAAO,cAAc,CAAC,EAAE,OAAO,QAAQ;AAChE,kBAAQ,IAAI,sBAAsB,SAAS,UAAU,UAAU,EAAE;AACjE,2BAAiB,KAAK,eAAe,SAAS,UAAU,iBAAiB,OAAO,CAAC;QACrF,SAAS,GAAG;AAAE,2BAAiB,gBAAgB,OAAO,CAAC;QAAG;MAAC,CAC9D;IAAE;AAGP,aAAS,iBAAuB;AAC5B,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,wBAAc,OAAO,YAAY,EAAE,OAAM;AACzC,2BAAiB,gBAAgB,OAAO,CAAC;QAC7C,SAAS,GAAG;AAAE,2BAAiB,qBAAqB,OAAO,CAAC;QAAG;MAAC,CACnE;IAAE;AAGP,aAAS,iBAAuB;AAC5B,aAAO,QAAQ,MAAM;AACjB,YAAI;AACA,cAAI,wBAAwB,MAAM;AAC9B,gBAAI;AAAE,mCAAqB,OAAO,gBAAgB,EAAE,OAAO,EAAE;AAAG,+BAAiB,0BAA0B,OAAO,CAAC;AAAG;YAAQ,SAAS,GAAG;YAAE;UAChJ;AACA,gBAAM,KAAK,cAAc,OAAO,kBAAkB,CAAC,EAAE,OAAM;AAC3D,kBAAQ,IAAI,6BAA6B,EAAE;AAC3C,2BAAiB,KAAK,2BAA2B,qBAAqB,OAAO,CAAC;QAClF,SAAS,GAAG;AAAE,2BAAiB,oBAAoB,OAAO,CAAC;QAAG;MAAC,CAClE;IAAE;AAGP,aAAS,qBAAqB,MAAmB;AAC7C,UAAI;AAAE,cAAM,IAAI,OAAO,OAAO,MAAM,IAAI;AAAG,YAAI,KAAK;AAAM,iBAAO;MAAG,SAAS,GAAG;MAAE;AAClF,iBAAW,OAAO,OAAO,OAAO,YAAY;AACxC,YAAI;AAAE,gBAAM,IAAI,IAAI,MAAM,MAAM,IAAI;AAAG,cAAI,KAAK;AAAM,mBAAO;QAAG,SAAS,GAAG;QAAE;MAClF;AACA,aAAO;IAAK;AAIpB,aAAS,mBAA2B;AAChC,YAAM,OAAoB,oBAAI,IAAG;AAEjC,UAAI;AACA,YAAI,oBAAoB,MAAM;AAC1B,kBAAQ,IAAI,kCAAkC;AAC9C,iBAAO;QACX;AAEA,cAAM,aAAa,OAAO,OAAO,mBAAmB,EAC/C,SAAS,eAAe,gBAAgB,EACxC,OAAO,iBAAiB,KAAK,QAAQ,IAAI;AAE9C,YAAI,cAAc,QAAQ,WAAW,UAAU,GAAG;AAC9C,kBAAQ,IAAI,+BAA+B;AAC3C,iBAAO;QACX;AAEA,gBAAQ,IAAI,mBAAmB,WAAW,SAAS,eAAe;AAElE,iBAAS,IAAI,GAAG,IAAI,WAAW,QAAQ,KAAK;AACxC,cAAI;AACA,kBAAM,cAAc,WAAW,IAAI,CAAC;AACpC,gBAAI,eAAe,QAAQ,YAAY,OAAM;AAAI;AAEjD,kBAAM,OAAO,YAAY,OAAO,UAAU,EAAE,OAAM;AAClD,gBAAI,QAAQ,QAAQ,KAAK,OAAM;AAAI;AAEnC,kBAAM,WAAW,OAAO,KAAK,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,CAAE;AAEnE,kBAAM,aAAa,YAAY,OAAO,gBAAgB,EAAE,OAAM;AAC9D,kBAAM,SAAU,cAAc,QAAQ,CAAC,WAAW,OAAM,IAClD,OAAO,WAAW,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ,CAAE,IACxD;AAEN,kBAAM,MAAM,WAAW,MAAM;AAC7B,gBAAI,KAAK,IAAI,GAAG;AAAG;AACnB,iBAAK,IAAI,GAAG;AAEZ,oBAAQ,IAAI,mBAAmB,WAAW,WAAW,SAAS,GAAG;UAErE,SAAS,GAAG;UACZ;QACJ;AAEA,gBAAQ,IAAI,wCAAwC,KAAK,IAAI;MAEjE,SAAS,GAAG;AACR,gBAAQ,IAAI,kBAAkB,CAAC;MACnC;AAEA,aAAO,KAAK;IAAK;AAEjB,aAAS,kBAAwB;AAC7B,UAAI,QAAQ;AACZ,YAAM,UAAU,MAAM;AAClB;AACA,YAAI;AACA,cAAI,iBAAgB,KAAM;AAAM;QACpC,SAAS,GAAG;QAAE;AACd,YAAI,QAAQ;AAAI,qBAAW,SAAS,GAAI;MAAE;AAE9C,iBAAW,SAAS,GAAI;IAAE;AAE9B,oBAAe;AAEf,aAAS,sBAAsB,QAAsB;AACjD,YAAM,QAAQ,KAAK,OAAO,UAAU,EAAE,OAAM;AAC5C,UAAI,SAAS;AAAkB;AAC/B,yBAAmB,QAAQ;AAC3B,YAAM,SAAS,SAAS,MAAM;AAC9B,UAAI,QAAQ;AACR,YAAI;AACA,yBAAc;QAClB,SAAS,GAAG;QAAE;AACd,YAAI;AAEA,gBAAM,UAAU,iBAAiB,WAAW;AAC5C,cAAI,OAAO,aAAa;AACpB,mBAAO,UAAU,CAAC,OAAO;AAEzB,gBAAI,OAAO,SAAS;AAChB,kBAAI,OAAO;AAAS,iCAAiB,cAAc,OAAO,SAAS,KAAK;AACxE,kBAAI,OAAO,cAAc;AAAE,oBAAI;AAAE,yBAAO,aAAY;gBAAI,SAAS,IAAI;gBAAE;cAAE;YAC7E,OAAO;AACH,kBAAI,OAAO;AAAS,iCAAiB,eAAe,OAAO,SAAS,KAAK;AACzE,kBAAI,OAAO,eAAe;AAAE,oBAAI;AAAE,yBAAO,cAAa;gBAAI,SAAS,IAAI;gBAAE;cAAE;YAC/E;UACJ,OAAO;AACH,gBAAI,OAAO;AAAS,+BAAiB,OAAO,SAAS,KAAK;AAC1D,gBAAI,OAAO,QAAQ;AAAE,kBAAI;AAAE,uBAAO,OAAM;cAAI,SAAS,IAAI;cAAE;YAAE;UACjE;AACA,cAAI,OAAO,eAAe,YAAY,mBAAmB,aAAa;AAAa,uBAAU;QACjG,SAAS,GAAG;QAEZ;MACJ;IAAC;AAGL,QAAI,mBAAmB,MAAM;AAC7B,YAAM,mBAAmB,gBAAgB,OAAO,gBAAgB;AAChE,uBAAiB,iBAAiB,SAAU,UAAU;AAClD,cAAM,UAAU,KAAK,OAAO,UAAU,EAAE,OAAM,EAAG,SAAQ;AACzD,YAAI,QAAQ,SAAS,KAAK,QAAQ,CAAC,KAAK,KAAK;AACzC,cAAI,qBAAqB,QAAQ,CAAC,kBAAkB,OAAM,KAAM,SAAS,OAAO,OAAO,kBAAkB,MAAM,GAAG;AAC9G,kCAAsB,QAAQ,UAAU,CAAC,CAAC;AAC1C;UACJ;AACA;QACJ;AACA,eAAO,KAAK,OAAO,gBAAgB,EAAE,OAAO,QAAQ;MAAE;IAE1D;AAEA,QAAI,mBAAyC;AAC7C,QAAI,qBAA0B;AAC9B,QAAI,qBAA0B;AAC9B,QAAI,0BAA+B;AACnC,aAAS,cAAc;AACnB,UAAI;AACJ,YAAI,qBAAqB,MAAM;AAC3B,6BAAmB,CAAA;AACnB,gBAAM,QAAQ,CAAC,iBAAiB,mBAAmB,cAAc,iBAAiB,sBAAsB,eAAe;AACvH,qBAAW,KAAK,OAAO;AAAE,gBAAI;AAAE,+BAAiB,CAAC,IAAI,aAAa,MAAM,CAAC,EAAE;YAAO,SAAS,GAAG;YAAE;UAAE;AAClG,cAAI;AAAE,sCAA0B,aAAa,OAAO,qBAAqB,CAAC;UAAG,SAAS,GAAG;UAAE;AAC3F,cAAI;AACA,kBAAM,IAAI,wBAAwB,OAAO,CAAC;AAC1C,gBAAI,KAAK,QAAQ,CAAC,EAAE,OAAM,GAAI;AAC1B,mCAAqB,EAAE,OAAO,sBAAsB,CAAC;AACrD,mCAAqB,EAAE,OAAO,sBAAsB,CAAC,EAAE,SAAS,yDAAyD,sBAAsB;YACnJ;UACJ,SAAS,GAAG;UAAE;QAClB;AACA,cAAM,aAAc,wBAAwB,OAAO,CAAC;AACpD,cAAM,cAAc,wBAAwB,OAAO,CAAC;AACpD,YAAI,cAAc,QAAQ,WAAW,OAAM,KAAM,eAAe,QAAQ,YAAY,OAAM;AAAI;AAC9F,cAAM,UAAW,eAAe,OAAS,aAAa,OAAO,MAAM,CAAC,IAAK;AACzE,cAAM,IAAI;AACV,YAAI,KAAK;AAAM;AACf,UAAE,OAAO,iBAAiB,eAAe,GAAM,OAAO;AAAG,sBAAgB,QAAQ,OAAM,MAAO;AAC9F,UAAE,OAAO,iBAAiB,iBAAiB,GAAI,OAAO;AAAG,wBAAgB,QAAQ,OAAM,MAAO;AAC9F,UAAE,OAAO,iBAAiB,YAAY,GAAS,OAAO;AAAG,mBAAgB,QAAQ,OAAM,MAAO;AAC9F,UAAE,OAAO,iBAAiB,eAAe,GAAM,OAAO;AAAG,sBAAgB,QAAQ,OAAM,MAAO;AAC9F,UAAE,OAAO,iBAAiB,oBAAoB,GAAG,OAAO;AAAG,oBAAc,QAAQ,OAAM,MAAO;AAC9F,UAAE,OAAO,iBAAiB,eAAe,GAAM,OAAO;AAAG,uBAAgB,QAAQ,OAAM,MAAO;AAC9F,UAAE,OAAO,iBAAiB,iBAAiB,GAAI,OAAO;AAAG,yBAAiB,QAAQ,OAAM,MAAO;AAC/F,UAAE,OAAO,iBAAiB,eAAe,GAAM,OAAO;AAAG,uBAAe,QAAQ,OAAM,MAAO;AAC7F,UAAE,OAAO,iBAAiB,YAAY,GAAS,OAAO;AAAG,oBAAgB,QAAQ,OAAM,MAAO;AAC9F,UAAE,OAAO,iBAAiB,oBAAoB,GAAG,OAAO;AAAG,qBAAa,QAAQ,OAAM,MAAO;AAE7F,cAAM,IAAI;AACV,UAAE,OAAO,iBAAiB,eAAe,GAAG,cAAa,CAAE;AAC3D,oBAAY,CAAC,QAAQ,UAAS,GAAI,QAAQ,IAAI,CAAC,EAAE,UAAS,CAAE;AAE5D,UAAE,OAAO,iBAAiB,eAAe,GAAG,cAAa,CAAE;AAC3D,mBAAW,CAAC,QAAQ,UAAS,GAAI,QAAQ,IAAI,CAAC,EAAE,UAAS,CAAE;MAC3D,SAAS,GAAG;MAAE;IAAC;AAGnB,QAAI,aAAa;AACb,kBAAY,OAAO,QAAQ,EAAE,iBAAiB,WAAY;AACtD,mBAAW;AACX,YAAI;AACA,8BAAoB,KAAK,MAAM,mBAAmB,EAAE;AACpD,+BAAqB,KAAK,MAAM,oBAAoB,EAAE;AACtD,yBAAe,KAAK,MAAM,cAAc,EAAE;AAC1C,yBAAe,KAAK,MAAM,cAAc,EAAE;QAC9C,SAAS,GAAG;QAAC;AAEb,YAAI,CAAC,cAAc,WAAW,OAAM,GAAI;AACpC,cAAI;AACA,yBAAa,OAAO,OAAO,MAAM,EAAE,OAAO,OAAO,OAAO,iCAAiC,CAAC;AAC1F,gBAAI,CAAC,cAAc,WAAW,OAAM,GAAI;AACpC,2BAAa,OAAO,OAAO,MAAM,EAAE,OAAO,OAAO,OAAO,aAAa,CAAC;YAC1E;AACA,yBAAa,OAAO,OAAO,MAAM,EAAE,OAAO,OAAO,OAAO,YAAY,CAAC;AACrE,gBAAI,CAAC,cAAc,WAAW,OAAM,GAAI;AACpC,2BAAa,OAAO,OAAO,MAAM,EAAE,OAAO,OAAO,OAAO,gBAAgB,CAAC;YAC7E;AACA,yBAAa,QAAQ,MAAM,YAAY,EAAE;AACzC,wBAAY,QAAQ,MAAM,WAAW,EAAE;AACvC,iCAAqB,WAAW,MAAM,oBAAoB,EAAE;AAC5D,gBAAI;AACA,sBAAQ,UAAU,OAAO,oBAAoB,EAAE,SAAS,eAAe,eAAe,EAAE,OAAO,KAAK,KAAK,QAAQ,OAAO,OAAO,WAAW,CAAC;AAC3I,kBAAI,CAAC,SAAS,MAAM,OAAM,GAAI;AAC1B,wBAAQ,UAAU,OAAO,oBAAoB,EAAE,SAAS,eAAe,eAAe,EAAE,OAAO,KAAK,KAAK,QAAQ,OAAO,OAAO,mBAAmB,CAAC;cACvJ;YACJ,SAAS,GAAG;YAAC;AACb,gBAAI,CAAC,SAAS,MAAM,OAAM,GAAI;AAC1B,kBAAI;AACA,sBAAM,WAAW,OAAO,OAAO,mBAAmB,EAAE,SAAS,aAAa,EAAE,OAAO,KAAK,KAAK,MAAM;AACnG,oBAAI,YAAY,MAAM;AAClB,2BAAS,KAAK,GAAG,KAAK,SAAS,QAAQ,MAAM;AACzC,wBAAI;AACA,4BAAM,IAAI,SAAS,IAAI,EAAE;AACzB,0BAAI,KAAK,QAAQ,CAAC,EAAE,OAAM,GAAI;AAAE,gCAAQ;AAAG;sBAAO;oBACtD,SAAS,IAAI;oBAAE;kBACnB;gBACJ;cACJ,SAAS,GAAG;cAAC;YACjB;AACA,gBAAI,CAAC,SAAS,MAAM,OAAM,GAAI;AAC1B,kBAAI;AAAE,wBAAQ,KAAK,OAAO,+BAA+B,CAAC,EAAE,OAAO,OAAO,OAAO,QAAQ,GAAG,EAAE;cAAG,SAAS,GAAG;cAAC;YAClH;AACA,gBAAI,CAAC,SAAS,MAAM,OAAM,GAAI;AAC1B,kBAAI;AAAE,wBAAQ,KAAK,OAAO,+BAA+B,CAAC,EAAE,OAAO,OAAO,OAAO,YAAY,GAAG,EAAE;cAAG,SAAS,GAAG;cAAC;YACtH;UACJ,SAAS,GAAG;UAAC;QACjB;AAEA,oBAAY,KAAK,OAAO,eAAe,EAAE,OAAM;AAC/C,eAAY,KAAK,OAAO,UAAU,EAAE,OAAM;AAE1C,YAAI,iBAAiB,GAAG;AACpB,yBAAe;QACnB;AACA,YAAI,OAAO,eAAe,GAAK;AAC3B,eAAK,OAAO,QAAQ,EAAE,OAAM;AAC5B;QACJ;AAEA,oBAAW;AACX;AAEA,YAAI,OAAO,wBAAwB,GAAG;AAClC,kCAAwB;AACxB,cAAI;AAAE,+BAAkB;UAAI,SAAS,GAAG;UAAE;QAC9C;AACA,YAAI;AACA,cAAI,0BAA0B,QAAQ,2BAA2B,KAAK,QAAQ;AAC1E,qCAAyB,KAAK;AAC9B,gBAAI;AAAE,iCAAkB;YAAI,SAAS,GAAG;YAAE;UAC9C;QACJ,SAAS,GAAG;QAAE;AAEd,YAAI,eAAgB,OAAO,kBAAkB,MAAO;AAChD,4BAAkB;AAClB,cAAI;AACA,kBAAM,IAAI,WAAU;AACpB,gBAAI,KAAK,QAAQ,CAAC,EAAE,OAAM,GAAI;AAC1B,kBAAI,oBAAoB,MAAM;AAAE,oBAAI;AAAE,oCAAkB,EAAE,OAAO,kBAAkB;gBAAG,SAAS,GAAG;gBAAE;cAAE;AACtG,kBAAI,mBAAmB;AAAM,gCAAgB,OAAM;YACvD;UACJ,SAAS,GAAG;UAAE;QAClB;AACA,YAAI,cAAe,OAAO,kBAAkB,MAAO;AAC/C,4BAAkB;AAClB,cAAI;AACA,kBAAM,IAAI,WAAU;AACpB,gBAAI,KAAK,QAAQ,CAAC,EAAE,OAAM,GAAI;AAC1B,kBAAI,mBAAmB,MAAM;AAAE,oBAAI;AAAE,mCAAiB,EAAE,OAAO,iBAAiB;gBAAG,SAAS,GAAG;gBAAE;cAAE;AACnG,kBAAI,kBAAkB;AAAM,+BAAe,OAAM;YACrD;UACJ,SAAS,GAAG;UAAE;QAClB;AACA,YAAI,SAAU,OAAO,eAAe,MAAO;AACvC,yBAAe;AACf,cAAI;AACA,kBAAM,IAAI,WAAU;AACpB,gBAAI,KAAK,QAAQ,CAAC,EAAE,OAAM,GAAI;AAC1B,kBAAI,cAAc,MAAM;AAAE,oBAAI;AAAE,8BAAY,EAAE,OAAO,gBAAgB;gBAAG,SAAS,GAAG;gBAAE;cAAE;AACxF,kBAAI,aAAa;AAAM,0BAAU,OAAM;YAC3C;UACJ,SAAS,GAAG;UAAE;QAClB;AACA,YAAI,mBAAmB,OAAO,eAAe,MAAM;AAC/C,yBAAe;AACf,cAAI;AAAE,0BAAc,SAAU,OAAO,KAAM,KAAK,GAAK,CAAG,CAAC;UAAG,SAAS,GAAG;UAAE;QAC9E;AACA,YAAI,qBAAsB,OAAO,sBAAsB,GAAI;AACvD,gCAAsB;AACtB,cAAI;AAAE,4BAAe;UAAI,SAAS,GAAG;UAAE;QAC3C;AACA,YAAI,qBAAsB,OAAO,qBAAqB,GAAI;AACtD,+BAAqB;AACrB,cAAI;AACA,kBAAM,IAAI,YAAW;AACrB,8BAAkB,GAAG,UAAU;UACnC,SAAS,GAAG;AAAE,oBAAQ,IAAI,kCAAkC,CAAC;UAAG;QACpE;AACZ,YAAI,iBAAiB,OAAO,iBAAiB,KAAK;AAC9C,2BAAiB;AACjB,gBAAM,cAAc,KAAK,MAAM,OAAO,GAAG,IAAI;AAC7C,cAAI;AACA,0BAAc,SAAS,GAAG,GAAG,cAAc,IAAI,CAAC,CAAC;UACrD,SAAS,GAAG;UAAC;QACjB;AACY,YAAK,aAAa,kBAAoB,CAAC,aAAa,eAAgB;AAChE,cAAI,uBAAuB,MAAM,OAAO;AAAsB,uBAAU;AACxE,cAAI,QAAQ,MAAM;AACd,gBAAI;AACA,yBAAU;YACd,SAAS,GAAG;AAER,kBAAI,EAAE;AACN,oBAAI;AAAE,sBAAI,QAAQ,MAAM;AAAE,4BAAQ,IAAI;kBAAG;gBAAE,SAAS,IAAI;gBAAE;AAC1D,qBAAO;YACX;UACJ,OAAO;AACH,gBAAI;AACA,kBAAI,aAAa,MAAM;AAAG,6BAAY;YAC1C,SAAS,GAAG;AACR,kBAAI,EAAE,OAAO;cAAE;YACnB;UACJ;QACJ,OAAO;AACH,cAAI,QAAQ,MAAM;AAAE,gBAAI;AAAE,sBAAQ,IAAI;YAAG,SAAS,GAAG;YAAG;AAAE,mBAAO;UAAM;QAC3E;AAIA,YAAI,QAAQ,MAAM;AACd,cAAI,aAAa,MAAM;AAAE,gBAAI;AAAE,sBAAQ,SAAS;YAAG,SAAS,GAAG;YAAG;AAAE,wBAAY;UAAM;QAC1F,OAAO;AACH,cAAI,aAAa,MAAM;AACnB,gBAAI;AACA,8BAAe;YACnB,SAAS,GAAG;AACR,kBAAI,EAAE,OAAO;cAAE;YACnB;UACJ;QACJ;AAEA,YAAI;AACA,cAAI,QAAQ,QAAQ,aAAa,QAAQ,CAAC,UAAU,OAAM,KAAM,iBAAiB,SAAS,GAAG;AACzF,kBAAM,QAAQ,KAAK,OAAO,UAAU,EAAE,OAAM;AAC5C,gBAAI,QAAQ,oBAAoB,QAAQ,gBAAgB,MAAM;AAC1D,8BAAgB;AAChB,oBAAM,SAAS,aAAa,SAAS,EAAE,OAAO,cAAc,EAAE,OAAM;AACpE,kBAAI,OAAO;AACX,kBAAI;AAAE,uBAAO,QAAQ,OAAO,iBAAiB,CAAC,EAAE,OAAO,QAAQ,MAAM,IAAI,CAAC;cAAG,SAAS,IAAI;cAAE;AAC5F,kBAAI,QAAQ,QAAQ,CAAC,KAAK,OAAM,GAAI;AAChC,yBAAS,KAAK,GAAG,KAAK,KAAK,QAAQ,MAAM;AACrC,sBAAI;AACA,0BAAM,SAAS,KAAK,IAAI,EAAE;AAC1B,wBAAI,UAAU,QAAQ,OAAO,OAAM;AAAI;AACvC,+BAAW,MAAM,kBAAkB;AAC/B,0BAAI;AACA,4BAAI,GAAG,YAAY,QAAQ,CAAC,GAAG,SAAS,OAAM,KAAM,OAAO,OAAO,OAAO,GAAG,SAAS,MAAM,GAAG;AAC1F,gDAAsB,GAAG,IAAI;AAC7B;wBACJ;sBACJ,SAAS,IAAI;sBAAE;oBACnB;AACA,wBAAI,KAAK,OAAO,UAAU,EAAE,OAAM,KAAM;AAAkB;kBAC9D,SAAS,IAAI;kBAAE;gBACnB;cACJ;YACJ;UACJ;QACJ,SAAS,IAAI;QAAE;AAEf,YAAI;AAAE,0BAAe;QAAI,SAAS,GAAG;QAAE;AAEvC,YAAI;AACA,cAAI,sBAAsB;AACtB,mCAAuB;UAC3B,OAAO;AACH,gBAAI,cAAc,MAAM;AACpB,kBAAI,CAAC,WAAW,OAAO,gBAAgB,EAAE,OAAM,GAAI;AAAE,wBAAQ,UAAU;AAAG,6BAAa;cAAM;AACxF,2BAAW,OAAO,WAAW,EAAE,OAAO,KAAK;YACpD;AACA,gBAAI,WAAW,MAAM;AACjB,kBAAI,UAAU,QAAQ,OAAO,gBAAgB,EAAE,OAAM;AACrD,kBAAI,WAAW,MAAM;AACjB,oBAAI,CAAC,QAAQ,OAAO,gBAAgB,EAAE,OAAM,GAAI;AAAE,0BAAQ,OAAO;AAAG,4BAAU;gBAAM;AAC/E,0BAAQ,OAAO,WAAW,EAAE,OAAO,KAAK;cACjD;YACJ;UACJ;QACJ,QAAQ;QAAE;AAEV,YAAI,cAAc,CAAC,WAAW,OAAM,GAAI;AACpC,cAAI;AACA,gBAAI,qBAAqB,MAAM;AAC3B,kBAAI;AAAE,mCAAmB,OAAO,OAAO,SAAS,wBAAwB,EAAE,MAAM,MAAM,oBAAoB;cAAG,SAAS,GAAG;cAAE;YAC/H;AACA,gBAAI,oBAAoB,MAAM;AAC1B,oBAAM,KAAK,iBAAiB,OAAO,UAAU,EAAE,OAAM;AACrD,kBAAI,MAAM,CAAC,GAAG,OAAM;AAAI,2BAAW,OAAO,iBAAiB,EAAE,OAAO,EAAE;YAC1E;UACJ,SAAS,GAAG;UAAC;QACjB;AAEA,gBAAQ,KAAI,EAAG,OAAO,OAAK,EAAE,OAAO,EAAE,QAAQ,OAAK;AAC/C,cAAI,EAAE,QAAQ;AACV,gBAAI;AAAE,gBAAE,OAAM;YAAI,SACX,GAAG;AAAE,sBAAQ,MAAM,sBAAsB,EAAE,UAAU,MAAM,CAAC;YAAG;UAC1E;QAAC,CACJ;AAED,aAAK,OAAO,QAAQ,EAAE,OAAM;AAE5B,YAAI;AAAE,wBAAa;QAAI,SAAS,GAAG;QAAE;AACrC,YAAI;AAAE,yBAAc;QAAI,SAAS,GAAG;QAAE;AACtC,YAAI;AAAE,0BAAe;QAAI,SAAS,GAAG;QAAE;AACvC,YAAI;AAAE,6BAAkB;QAAI,SAAS,GAAG;QAAE;MAAC;IAEnD,OAAO;IACP;AAIA,YAAQ,IAAI;;;;;;;SAOP;EAAE,CAEV;AAED,SAAO,QAAQ,MAAM;AAEjB,QAAI;AAwBJ,UAASC,qBAAT,SAA2B,SAAS;AAChC,YAAI,CAAC,WAAW,QAAQ,OAAM;AAAI,iBAAO;AAEzC,YAAI;AACA,gBAAM,SAAS,YAAY,IAAI,QAAQ,OAAO,SAAQ,CAAE;AACxD,cAAI,UAAU,OAAO;AAAK,mBAAO,OAAO;QAC5C,SAAQ,GAAG;QAAC;AAEZ,YAAI,kBAAkB;AAClB,cAAI;AACA,kBAAM,gBAAgB,CAAC,aAAa,WAAW,eAAe,WAAW;AACzE,uBAAW,aAAa,eAAe;AACnC,kBAAI;AACA,sBAAM,QAAQ,QAAQ,SAAS,SAAS;AACxC,oBAAI,OAAO;AACP,wBAAM,MAAM,MAAM;AAClB,sBAAI,OAAO,CAAC,IAAI,OAAM,GAAI;AACtB,wBAAI;AACA,4BAAM,WAAW,IAAI,SAAS,OAAO;AACrC,0BAAI,UAAU;AACV,8BAAM,SAAS,SAAS;AACxB,4BAAI,UAAU,CAAC,OAAO,OAAM,KAAM,OAAO,SAAS;AAC9C,iCAAO,OAAO;wBAClB;sBACJ;oBACJ,SAAQ,GAAG;oBAAC;AAEZ,wBAAI;AACA,4BAAM,eAAe,IAAI,UAAU,SAAS;AAC5C,0BAAI,gBAAgB,CAAC,aAAa,eAAe,OAAM,GAAI;AACvD,8BAAM,SAAS,aAAa,OAAM;AAClC,4BAAI,UAAU,CAAC,OAAO,OAAM,KAAM,OAAO,SAAS;AAC9C,iCAAO,OAAO;wBAClB;sBACJ;oBACJ,SAAQ,GAAG;oBAAC;kBAChB;gBACJ;cACJ,SAAQ,GAAG;cAAC;YAChB;UACJ,SAAQ,GAAG;UAAC;QAChB;AAEA,cAAM,aAAa;UACf;UAAS;UAAO;UAAO;UAAS;UAChC;UAAU;UAAQ;UAAgB;UAClC;UAAa;UAAW;UAAiB;UACzC;UAAS;UAAO;UAAS;;AAG7B,mBAAW,aAAa,YAAY;AAChC,cAAI;AACA,kBAAM,QAAQ,QAAQ,SAAS,SAAS;AACxC,gBAAI,OAAO;AACP,oBAAM,MAAM,MAAM;AAClB,kBAAI,OAAO,CAAC,IAAI,OAAM,GAAI;AACtB,oBAAI,IAAI,YAAY,QAAW;AAC3B,wBAAM,UAAU,IAAI;AACpB,sBAAI,WAAW,QAAQ,SAAS,GAAG;AAC/B,wBAAI,QAAQ,SAAS,gBAAgB,KACjC,QAAQ,SAAS,oBAAoB,KACrC,QAAQ,WAAW,SAAS,KAC5B,QAAQ,WAAW,UAAU,GAAG;oBACpC;kBACJ;gBACJ;cACJ;YACJ;UACJ,SAAQ,GAAG;UAAC;QAChB;AAEA,YAAI;AACA,gBAAM,SAAS,QAAQ,UAAU,SAAS;AAC1C,cAAI,UAAU,CAAC,OAAO,eAAe,OAAM,GAAI;AAC3C,kBAAM,SAAS,OAAO,OAAM;AAC5B,gBAAI,UAAU,CAAC,OAAO,OAAM,KAAM,OAAO,SAAS;AAC9C,qBAAO,OAAO;YAClB;UACJ;QACJ,SAAQ,GAAG;QAAC;AAEZ,YAAI;AACA,gBAAM,SAAS,QAAQ;AACvB,mBAAS,SAAS,GAAG,SAAS,KAAK,UAAU,GAAG;AAC5C,gBAAI;AACA,oBAAM,MAAM,OAAO,IAAI,MAAM,EAAE,YAAW;AAC1C,kBAAI,CAAC,IAAI,OAAM,GAAI;AACf,sBAAM,MAAM,IAAI,YAAY,GAAG;AAC/B,oBAAI,KAAK;AACL,sBAAI,IAAI,SAAS,gBAAgB,KAC7B,IAAI,SAAS,oBAAoB,KACjC,IAAI,WAAW,SAAS,KACxB,IAAI,WAAW,UAAU,GAAG;AAC5B,0BAAM,QAAQ,IAAI,MAAM,mBAAmB;AAC3C,wBAAI,OAAO;AAEP,6BAAO,MAAM,CAAC;oBAClB;AACA,2BAAO;kBACX;gBACJ;cACJ;YACJ,SAAQ,GAAG;YAAC;UAChB;QACJ,SAAQ,GAAG;QAAC;AAEZ,eAAO;MAAU,GAGZC,aAAT,SAAmB,SAAS;AACxB,YAAI,CAAC,WAAW,QAAQ,OAAM;AAAI,iBAAO;AAEzC,YAAI;AACA,gBAAM,SAAS,YAAY,IAAI,QAAQ,OAAO,SAAQ,CAAE;AACxD,cAAI,UAAU,OAAO;AAAQ,mBAAO,OAAO,OAAO,YAAW;QACjE,SAAQ,GAAG;QAAC;AAEZ,cAAM,eAAe,CAAC,YAAY,UAAU,WAAW,gBAAgB,YAAY;AACnF,mBAAW,aAAa,cAAc;AAClC,cAAI;AACA,kBAAM,QAAQ,QAAQ,SAAS,SAAS;AACxC,gBAAI,OAAO;AACP,oBAAM,MAAM,MAAM;AAClB,kBAAI,OAAO,CAAC,IAAI,OAAM,KAAM,IAAI,SAAS;AACrC,uBAAO,IAAI,QAAQ,YAAW;cAClC;YACJ;UACJ,SAAQ,GAAG;UAAC;QAChB;AAEA,YAAI;AACA,gBAAM,SAAS,QAAQ,UAAU,YAAY;AAC7C,cAAI,UAAU,CAAC,OAAO,eAAe,OAAM,GAAI;AAC3C,kBAAM,SAAS,OAAO,OAAM;AAC5B,gBAAI,UAAU,CAAC,OAAO,OAAM,KAAM,OAAO,SAAS;AAC9C,qBAAO,OAAO,QAAQ,YAAW;YACrC;UACJ;QACJ,SAAQ,GAAG;QAAC;AAEZ,YAAI;AACA,gBAAM,cAAc,QAAQ,SAAS,iBAAiB,KAAK,QAAQ,SAAS,eAAe;AAC3F,cAAI,aAAa;AACb,kBAAM,SAAS,YAAY;AAC3B,gBAAI,UAAU,CAAC,OAAO,OAAM,GAAI;AAC5B,qBAAO;YACX;UACJ;QACJ,SAAQ,GAAG;QAAC;AAEZ,eAAO;MAAM,GAGRC,kBAAT,SAAwB,eAAe;AACnC,YAAI,CAAC,iBAAiB,cAAc,OAAM;AAAI,iBAAO;AAErD,YAAI;AACA,gBAAM,WAAW,kBAAkB,IAAI,cAAc,OAAO,SAAQ,CAAE;AACtE,cAAI;AAAU,mBAAO;QACzB,SAAQ,GAAG;QAAC;AAEZ,YAAI;AACA,gBAAM,YAAY,cAAc,SAAS,QAAQ;AACjD,cAAI,WAAW;AACX,kBAAM,OAAO,UAAU;AACvB,gBAAI,QAAQ,CAAC,KAAK,OAAM,GAAI;AACxB,qBAAO,KAAK;YAChB;UACJ;QACJ,SAAQ,GAAG;QAAC;AAEZ,YAAI;AACA,gBAAM,YAAY,cAAc,SAAS,MAAM;AAC/C,cAAI,WAAW;AACX,kBAAM,OAAO,UAAU;AACvB,gBAAI,QAAQ,CAAC,KAAK,OAAM,GAAI;AACxB,qBAAO,KAAK;YAChB;UACJ;QACJ,SAAQ,GAAG;QAAC;AAEZ,eAAO;MAAK,GAGPC,mBAAT,SAAyB,iBAAiB;AACtC,YAAI,CAAC,mBAAmB,gBAAgB,OAAM;AAAI,iBAAO;AAEzD,YAAI;AACA,gBAAM,gBAAgB,gBAAgB,UAAU,UAAU;AAC1D,cAAI,iBAAiB,CAAC,cAAc,eAAe,OAAM,GAAI;AACzD,kBAAM,SAAS,cAAc,OAAM;AACnC,gBAAI,UAAU,CAAC,OAAO,OAAM,GAAI;AAC5B,qBAAO,OAAO;YAClB;UACJ;QACJ,SAAQ,GAAG;QAAC;AAEZ,YAAI;AACA,gBAAM,YAAY,gBAAgB,SAAS,QAAQ;AACnD,cAAI,WAAW;AACX,kBAAM,OAAO,UAAU;AACvB,gBAAI,QAAQ,CAAC,KAAK,OAAM,GAAI;AACxB,qBAAO,KAAK;YAChB;UACJ;QACJ,SAAQ,GAAG;QAAC;AAEZ,eAAO;MAAK,GAuGPC,iBAAT,SAAuB,KAAK;AACxB,YAAI,CAAC,OAAO,IAAI,OAAM;AAAI,iBAAO;AACjC,YAAI;AACA,gBAAM,IAAI,IAAI;AACd,cAAI,MAAM;AAAG,mBAAO;AACpB,cAAI,IAAI;AACR,mBAAS,IAAI,GAAG,IAAI,GAAG,KAAK;AACxB,kBAAM,IAAI,IAAI,IAAI,CAAC;AACnB,iBAAK,OAAO,aAAa,CAAC;UAC9B;AACA,iBAAO;QACX,SAAQ,GAAG;AACP,iBAAO;QACX;MAAC,GAuBIC,uBAAT,WAA+B;AAC3B,YAAI,oBAAoB,CAAC,iBAAiB,OAAM;AAAI,iBAAO;AAC3D,cAAM,aAAa,CAAC,0BAA0B,YAAY,kBAAkB,aAAa;AACzF,mBAAW,MAAM,YAAY;AACzB,cAAI;AACA,kBAAM,MAAM,OAAO,OAAO,SAAS,EAAE;AACrC,gBAAI,KAAK;AACL,oBAAM,IAAI,IAAI,MAAM,MAAM,aAAa;AACvC,kBAAI,GAAG;AAAE,mCAAmB;AAAG,uBAAO;cAAG;YAC7C;UACJ,SAAQ,GAAG;UAAC;QAChB;AACA,YAAI;AACA,qBAAW,OAAO,OAAO,OAAO,YAAY;AACxC,gBAAI;AACA,oBAAM,IAAI,IAAI,MAAM,MAAM,aAAa;AACvC,kBAAI,GAAG;AAAE,mCAAmB;AAAG,uBAAO;cAAG;YAC7C,SAAQ,GAAG;YAAC;UAChB;QACJ,SAAQ,GAAG;QAAC;AACZ,eAAO;MAAK,GAGPC,cAAT,SAAoB,KAAK;AACrB,cAAM,MAAMD,qBAAmB;AAC/B,YAAI,CAAC;AAAK,gBAAM,IAAI,MAAM,qCAAqC;AAC/D,cAAM,QAAQ,CAAA;AACd,iBAAS,IAAI,GAAG,IAAI,IAAI,QAAQ;AAAK,gBAAM,KAAK,IAAI,WAAW,CAAC,IAAI,GAAI;AACxE,eAAO,OAAO,MAAM,KAAK,KAAK;MAAE,GAG3BE,8BAAT,SAAoC,KAAK;AACrC,cAAM,QAAQ,sBAAsB,MAAM,yCAAyC;AACnF,cAAM,OAAO,MAAM,MAAK;AACxB,cAAM,QAAQD,YAAW,GAAG;AAC5B,aAAK,OAAO,SAAS,CAAC,eAAe,CAAC,EAAE,OAAO,KAAK;AACpD,eAAO;MAAK;AA9XP,8BAAAN,oBA6GA,YAAAC,YA4CA,iBAAAC,iBA+BA,kBAAAC,kBA8HA,gBAAAC,gBAoCA,sBAAAC,sBAuBA,aAAAC,aAQA,6BAAAC;AA/YT,UAAI,mBAAmB;AACvB,UAAI;AACA,cAAM,aAAa,OAAO,OAAO,SAAS,wBAAwB,EAAE;AACpE,2BAAmB,WAAW,MAAM,8BAA8B;MACtE,SAAQ,GAAG;MACX;AAEA,UAAI,wBAAwB;AAC5B,UAAI,kBAAkB;AACtB,UAAI,wBAAwB;AAC5B,UAAI;AACA,gCAAwB,OAAO,OAAO,SAAS,mCAAmC,EAAE;AACpF,0BAAkB,sBAAsB,MAAM,wCAAwC;AACtF,gCAAwB,sBAAsB,MAAM,8CAA8C;MACtG,SAAQ,GAAG;MACX;AACA,UAAI,CAAC,mBAAmB,gBAAgB,OAAM;AAAI;AAElD,YAAM,cAAc,oBAAI,IAAG;AAC3B,YAAM,cAAc,oBAAI,IAAG;AAC3B,YAAM,oBAAoB,oBAAI,IAAG;AAoNjC,UAAI;AACA,cAAM,eAAe,gBAAgB,UAAU,SAAS;AACxD,YAAI,gBAAgB,CAAC,aAAa,eAAe,OAAM,GAAI;AACvD,uBAAa,iBAAiB,SAAS,QAAQ;AAC3C,gBAAI;AACA,oBAAM,MAAM,KAAK,OAAO,SAAQ;AAChC,kBAAI,OAAO,YAAY,IAAI,GAAG,KAAK,CAAA;AACnC,mBAAK,MAAM,UAAU,CAAC,OAAO,OAAM,IAAK,OAAO,UAAU;AACzD,0BAAY,IAAI,KAAK,IAAI;YAC7B,SAAQ,GAAG;YAAC;AACZ,mBAAO,KAAK,OAAO,SAAS,EAAE,OAAO,MAAM;UAAE;QAGrD;MACJ,SAAS,GAAG;MAEZ;AAEA,UAAI;AACA,cAAM,kBAAkB,gBAAgB,UAAU,YAAY;AAC9D,YAAI,mBAAmB,CAAC,gBAAgB,eAAe,OAAM,GAAI;AAC7D,0BAAgB,iBAAiB,SAAS,WAAW;AACjD,gBAAI;AACA,oBAAM,MAAM,KAAK,OAAO,SAAQ;AAChC,kBAAI,OAAO,YAAY,IAAI,GAAG,KAAK,CAAA;AACnC,mBAAK,SAAS,aAAa,CAAC,UAAU,OAAM,IAAK,UAAU,UAAU;AACrE,0BAAY,IAAI,KAAK,IAAI;YAC7B,SAAQ,GAAG;YAAC;AACZ,mBAAO,KAAK,OAAO,YAAY,EAAE,OAAO,SAAS;UAAE;QAG3D;MACJ,SAAS,GAAG;MAEZ;AAEA,UAAI;AACA,cAAM,iBAAiB,gBAAgB,UAAU,gBAAgB;AACjE,YAAI,kBAAkB,CAAC,eAAe,eAAe,OAAM,GAAI;AAC3D,yBAAe,iBAAiB,SAAS,QAAQ;AAC7C,gBAAI;AACA,oBAAM,MAAM,KAAK,OAAO,SAAQ;AAChC,kBAAI,OAAO,YAAY,IAAI,GAAG,KAAK,CAAA;AACnC,mBAAK,MAAM,UAAU,CAAC,OAAO,OAAM,IAAK,OAAO,UAAU;AACzD,0BAAY,IAAI,KAAK,IAAI;YAC7B,SAAQ,GAAG;YAAC;AACZ,mBAAO,KAAK,OAAO,gBAAgB,EAAE,OAAO,MAAM;UAAE;QAG5D;MACJ,SAAS,GAAG;MAEZ;AAEA,YAAM,cAAc,CAAC,OAAO,QAAQ,OAAO,QAAQ,UAAU,QAAQ;AACrE,UAAI;AACA,cAAM,kBAAkB,gBAAgB,UAAU,iBAAiB;AACnE,YAAI,mBAAmB,CAAC,gBAAgB,eAAe,OAAM,GAAI;AAC7D,0BAAgB,iBAAiB,SAAS,WAAW;AACjD,gBAAI;AACA,oBAAM,MAAM,KAAK,OAAO,SAAQ;AAChC,kBAAI,OAAO,YAAY,IAAI,GAAG,KAAK,CAAA;AACnC,mBAAK,SAAS,aAAa,CAAC,UAAU,OAAM,IAAK,UAAU,UAAU;AACrE,0BAAY,IAAI,KAAK,IAAI;YAC7B,SAAQ,GAAG;YAAC;AACZ,mBAAO,KAAK,OAAO,iBAAiB,EAAE,OAAO,SAAS;UAAE;QAGhE;MACJ,SAAS,GAAG;MAEZ;AAEA,UAAI;AACA,cAAM,gBAAgB,gBAAgB,UAAU,mBAAmB;AACnE,YAAI,iBAAiB,CAAC,cAAc,eAAe,OAAM,GAAI;AACzD,wBAAc,iBAAiB,SAAS,MAAM;AAC1C,gBAAI,WAAW;AACf,gBAAI;AACA,kBAAI,MAAM,SAAS,KAAK,OAAO,EAAE;AACjC,kBAAI,OAAO,UAAU,GAAG,KAAK,OAAO,KAAK,MAAM,GAAG;AAC9C,2BAAW,YAAY,GAAG;cAC9B;YACJ,SAAQ,GAAG;YAAC;AACZ,gBAAI,UAAU;AACV,kBAAI;AACA,sBAAM,MAAM,KAAK,OAAO,SAAQ;AAChC,oBAAI,OAAO,YAAY,IAAI,GAAG,KAAK,CAAA;AACnC,qBAAK,SAAS;AACd,4BAAY,IAAI,KAAK,IAAI;cAC7B,SAAQ,GAAG;cAAC;YAChB;AACA,mBAAO,KAAK,OAAO,mBAAmB,EAAE,OAAO,IAAI;UAAE;QAG7D;MACJ,SAAS,GAAG;MAEZ;AAkBA,UAAI;AACA,cAAM,yBAAyB,sBAAsB,MAAM,yCAAyC;AACpG,cAAM,OAAO,uBAAuB,OAAO,SAAS,CAAC,eAAe,CAAC;AACrE,YAAI,QAAQ,CAAC,KAAK,eAAe,OAAM,GAAI;AACvC,eAAK,iBAAiB,SAAS,MAAM;AACjC,gBAAI;AACA,oBAAM,OAAOH,eAAc,IAAI;AAC/B,kBAAI,MAAM;AACN,kCAAkB,IAAI,KAAK,OAAO,SAAQ,GAAI,IAAI;cACtD;YACJ,SAAQ,GAAG;YAAC;AACZ,mBAAO,KAAK,OAAO,SAAS,CAAC,eAAe,CAAC,EAAE,OAAO,IAAI;UAAE;QAGpE;MACJ,SAAS,GAAG;MAEZ;AAEA,UAAI,mBAAmB;AAwCvB,YAAM,uBAAuB,sBAAsB,MAAM,wCAAwC;AACjG,UAAI;AACA,cAAM,KAAK,qBAAqB,UAAU,UAAU;AACpD,YAAI,MAAM,CAAC,GAAG,eAAe,OAAM,GAAI;AACnC,aAAG,iBAAiB,WAAW;AAC3B,mBAAO,KAAK,OAAO,UAAU,EAAE,OAAM;UAAG;QAGhD;MACJ,SAAS,GAAG;MAEZ;AACA,UAAI;AACA,cAAM,KAAK,qBAAqB,UAAU,UAAU;AACpD,YAAI,MAAM,CAAC,GAAG,eAAe,OAAM,GAAI;AACnC,aAAG,iBAAiB,WAAW;AAC3B,mBAAO,KAAK,OAAO,UAAU,EAAE,OAAM;UAAG;QAGhD;MACJ,SAAS,GAAG;MAEZ;AAEA,UAAI;AAEA,cAAM,aAAa,gBAAgB,UAAU,gBAAgB;AAC7D,YAAI,cAAc,CAAC,WAAW,eAAe,OAAM,GAAI;AACnD,qBAAW,iBAAiB,WAAW;AACnC,kBAAM,MAAMJ,mBAAkB,IAAI;AAClC,kBAAM,SAASC,WAAU,IAAI;AAE7B,gBAAI,gBAAgB;AACpB,gBAAI,cAAc;AAClB,gBAAI;AACA,oBAAM,cAAc,KAAK,SAAS,iBAAiB,KAAK,KAAK,SAAS,eAAe;AACrF,kBAAI,aAAa;AACb,gCAAgB,YAAY;AAC5B,oBAAI,iBAAiB,CAAC,cAAc,OAAM,GAAI;AAC1C,gCAAcC,gBAAe,aAAa;gBAC9C;cACJ;YACJ,SAAQ,GAAG;YAAC;AAEZ,kBAAM,YAAY,KAAK,OAAO,SAAQ;AACtC,wBAAY,IAAI,WAAW;cACvB;cACA;cACA;cACA,WAAW,KAAK,IAAG;aACtB;AAED,mBAAO,KAAK,OAAO,gBAAgB,EAAE,OAAM;UAAG;QAGtD;MACJ,SAAS,GAAG;MAEZ;AAEA,UAAI;AAEA,cAAM,kBAAkB,gBAAgB,UAAU,YAAY;AAC9D,YAAI,mBAAmB,CAAC,gBAAgB,eAAe,OAAM,GAAI;AAC7D,0BAAgB,iBAAiB,WAAW;AACxC,kBAAM,SAAS,KAAK,OAAO,YAAY,EAAE,OAAM;AAE/C,kBAAM,YAAY,KAAK,OAAO,SAAQ;AACtC,kBAAM,UAAU,YAAY,IAAI,SAAS;AAEzC,gBAAI,SAAS;AACT,0BAAY,OAAO,SAAS;AAC5B,0BAAY,OAAO,SAAS;YAChC;AAEA,mBAAO;UAAO;QAGtB;MACJ,SAAS,GAAG;MAEZ;IAEA,SAAS,GAAG;IACZ;EAAC,GACF,QAAQ;AAAE;AAIb,IAAI,eAAe;AACnB,SAAS,yBAAyB,cAAsB;AACpD,QAAM,YAAY,QAAQ,iBAAiB,cAAc;AACzD,MAAI,CAAC,WAAW;AAEZ;EACJ;AAEA,QAAM,gBAAgB,UAAU,iBAAiB,YAAY;AAC7D,MAAI,CAAC,eAAe;AAEhB;EACJ;AAIA,cAAY,OAAO,eAAe;IAC9B,QAAQ,MAAM;AACV,UAAI,CAAC,gBAAgB;AACjB,yBAAiB;AACjB,cAAK;MACT;IAAC;GAER;AACD,iBAAe;AAAK;CAIvB,SAAS,aAAa;AACnB,2BAAyB,UAAU;AACnC,MAAI;AAAc;AAClB,QAAM,IAAI,YAAY,MAAM;AACxB,QAAI,cAAc;AACd,oBAAc,CAAC;AACf;IACJ;AACA,6BAAyB,UAAU;EAAE,GACtC,GAAG;AAAE,GACV;CAED,SAAS,gBAAgB;AACtB,MAAI,WAAW;AACf,QAAM,QAAQ,MAAM;AAChB;AACA,QAAI;AAAgB;AACpB,QAAI,CAAC,QAAQ,iBAAiB,cAAc,GAAG;AAAE,UAAI,WAAW;AAAK,mBAAW,OAAO,GAAG;AAAG;IAAQ;AACrG,QAAI;AACA,aAAO,QAAQ,MAAM;AACjB,YAAI;AAAgB;AACpB,YAAI;AACA,cAAI,CAAC,OAAO,UAAU,CAAC,OAAO,OAAO,cAAc,OAAO,OAAO,WAAW,WAAW;AAAG;AAC1F,gBAAM,MAAM,OAAO,OAAO,SAAS,gBAAgB,KAAK,OAAO,OAAO,SAAS,iBAAiB;AAChG,cAAI,CAAC;AAAK;AACV,2BAAiB;AACjB,gBAAK;AACL,qBAAW,MAAM;UAAC,GAAK,GAAI;QAC/B,SAAS,GAAG;AACR,kBAAQ,MAAM,qCAAqC,CAAC;QACxD;MAAC,CACJ;IACL,SAAS,GAAG;IAAE;AACd,QAAI,WAAW;AAAK,iBAAW,OAAO,GAAG;EAAE;AAE/C,aAAW,OAAO,GAAI;AAAE,GAC1B;",
  "names": ["_", "getUrlFromRequest", "getMethod", "getRequestBody", "getResponseBody", "bytesToString", "getByteElementClass", "strToBytes", "newUploadHandlerFromString"]
}
